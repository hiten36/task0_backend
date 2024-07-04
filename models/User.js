const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid first name!`
        }
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid last name!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    dob: {
        type: Date,
        required: true,
        validate: {
            validator: function(v) {
                // Check if dob is older than 14 years and less than 99 years
                let today = new Date();
                let age = today.getFullYear() - v.getFullYear();
                let monthDiff = today.getMonth() - v.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < v.getDate())) {
                    age--;
                }
                return age >= 15 && age <= 99;
            },
            message: props => `${props.value} must be older than 14 years and less than 99 years!`
        }
    },
    age: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
