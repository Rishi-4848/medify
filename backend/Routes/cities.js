const router = require("express").Router()
const {fetchCities} = require("../Controllers/citiesController")


router.get("/:state",fetchCities)


module.exports = router