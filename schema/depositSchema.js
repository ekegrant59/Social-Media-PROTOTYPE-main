const mongoose = require('mongoose')
const mongodb = process.env.MONGODB
mongoose.connect(mongodb)

const depositSchema = new mongoose.Schema({
    email: String,
    coin: String,
    amount: Number,
    status: String,
    date: String
})

module.exports = mongoose.model('deposit', depositSchema)