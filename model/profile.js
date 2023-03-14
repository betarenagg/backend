const mongoose = require("mongoose");
const schema = mongoose.Schema

const ProfileSchama = new schema({
    username: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    DOB: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    Total_win: {
        type: String,
        required: true,
    },
    Total_bet: {
        type: String,
        required: true,
    },
    Total_waged: {
        type: String,
        required: true,
    },
    rank: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
}, { timestamp : true})

const Profile = mongoose.model('Profile', ProfileSchama)
module.exports = Profile