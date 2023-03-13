const mongoose = require("mongoose");
const schema = mongoose.Schema

const UserProfileSchama = new schema({
    Username: {
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
    image: {
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
    user_id: {
        type: String,
        required: true,
    }
}, { timestamp : true})

const UserProfile = mongoose.model('Profile', UserProfileSchama)
module.exports = UserProfile