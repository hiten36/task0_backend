const { Country } = require("../models/Location");
const { removeUndefined } = require("../utils/util");

const getCountries = async () => {
    const countries = await Country.find({}, { _id: 0, name: 1 });
    return { status: true, data: (countries) };
};

const getStatesByCountry = async ({ countryName }) => {
    const country = await Country.findOne({ name: countryName });
    if (!country) {
        return ({ status: false, message: 'Country not found', data: [] });
    }
    console.log(country);
    const states = country.states.map(state => ({ name: state.name }));
    return { status: true, data: states };
};

const getCitiesByState = async ({ stateName }) => {
    const country = await Country.findOne({ 'states.name': stateName });
    if (!country) {
        return ({ status: false, message: 'State not found', data: [] });
    }
    const cities = country.states.reduce((acc, cur) => {
        const foundState = cur.name === stateName;
        if (foundState) {
            acc = cur.cities.map(city => ({ name: city.name }));
        }
        return acc;
    }, []);
    return { status: true, data: cities };
};

module.exports = {
    getCountries,
    getStatesByCountry,
    getCitiesByState
};
