const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    location: {
        type: String
    },
    country: {
        type: String
    },
    description: {
        type: String
    },
    temperature: {
        type: Number
        
    },
    icon: {
        type: String
    }
})


module.exports = mongoose.model('weather', weatherSchema)