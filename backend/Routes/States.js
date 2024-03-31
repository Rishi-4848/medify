const router = require("express").Router()
const {fetchStates} = require("../Controllers/statesController")

router.get("/",fetchStates)


module.exports = router