const User = require("../models/User");
const { removeUndefined } = require("../utils/util");

// Get all users
const getUsers = async ({ id }) => {
    let and = [];
    if (id && id !== "" && id !== "undefined") {
        and.push({ _id: id });
    }
    if (and.length === 0) {
        and.push({});
    }
    const data = await User.find({ $and: and });
    return { status: true, data };
};

// Create a new user
const postUser = async ({ firstName, lastName, email, country, state, city, gender, dob, age }) => {
    const newUser = new User({
        firstName,
        lastName,
        email,
        country,
        state,
        city,
        gender,
        dob,
        age
    });

    const data  = await newUser.save();
    return { status: true, message: 'Saved!', data };
};

// Update user by ID
const putUser = async ({ id, firstName, lastName, email, country, state, city, gender, dob, age }) => {
    const updateObj=removeUndefined({firstName, lastName, email, country, state, city, gender, dob, age});
    await User.findByIdAndUpdate(id, {$set: updateObj}, {new: true});
    return { status: true, message: 'Updated!', data };
};

// Delete user by ID
const deleteUser = async ({ id }) => {
    // console.log(ids);
    const data=await User.findByIdAndDelete(id);
    return {status: true, data};
};

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
};
