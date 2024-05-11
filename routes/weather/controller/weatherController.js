const { default: mongoose } = require('mongoose');
const Weather = require('../model/Weather')

async function getAllWeatherLocations(req, res){
    try {
        const allWeathers = await Weather.find({});
        res.json({message: 'success', payload: allWeathers})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

async function addLocation(req, res){
    const {location, country, description, temperature, icon} = req.body
    try {
        const newWeather = new Weather({
            location,
            country,
            description,
            temperature,
            icon
        })
        await newWeather.save()
        res.json({message: 'success', payload: newWeather})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

async function deleteWeatherByID(req, res){
    try {
        const deletedWeather = await Weather.findByIdAndDelete({_id: req.params.id})
        res.json({message: 'success', payload: deletedWeather})
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
}

module.exports = {deleteWeatherByID, getAllWeatherLocations, addLocation}