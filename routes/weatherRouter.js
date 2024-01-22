const express = require('express');
const router = express.Router();

const {getAllWeatherLocations, addLocation, deleteWeatherByID} = require('./weather/controller/weatherController')

router.get('/get-all-searched-locations', getAllWeatherLocations);

router.delete('/delete-location/:id', deleteWeatherByID)

router.post('/add-location', addLocation)


module.exports = router