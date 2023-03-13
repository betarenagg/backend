const mongoose = require("mongoose");
const schema = mongoose.Schema

const Walletschema = new schema({
    user_id: {
        type: String,
        required: true,
        unique : true
    },
    Fa_Auth: {
        type: String,
        required: true,
    }
}, { timestamp : true})

module.exports = mongoose.model('Wallet', Walletschema)