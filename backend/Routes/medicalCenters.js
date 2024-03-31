const router = require("express").Router()
const {fetchCenters} = require("../Controllers/centersController")


router.get("/",fetchCenters)

module.exports = router