const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: { type: String, required: true }
});

const stateSchema = new Schema({
    name: { type: String, required: true },
    cities: [citySchema]
});

const countrySchema = new Schema({
    name: { type: String, required: true },
    states: [stateSchema]
});

const City = mongoose.model('City', citySchema);
const State = mongoose.model('State', stateSchema);
const Country = mongoose.model('Country', countrySchema);

module.exports = { City, State, Country };
