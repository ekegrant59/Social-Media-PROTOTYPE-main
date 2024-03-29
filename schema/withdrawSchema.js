const mongoose = require('mongoose')
const mongodb = process.env.MONGODB
mongoose.connect(mongodb)

const withdrawSchema = new mongoose.Schema({
    email: String,
    name: String,
    address: String,
    amount: Number,
    coin: String,
    status: String,
    date: String
})

module.exports = mongoose.model('withdraw', withdrawSchema)