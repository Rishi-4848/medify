
require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express()
const port = process.env.PORT

const statesRouter = require("./Routes/States")
const citiesRouter = require("./Routes/cities")
const medicalCentersRouter = require("./Routes/medicalCenters")
const {verifyAuth} = require("./Middlewares/verifyAuth")

app.use(express.json())
app.use(cors())

app.use(verifyAuth)
app.use("/states",statesRouter)
app.use("/cities",citiesRouter)
app.use("/centers",medicalCentersRouter)

app.listen(port,()=>{
  console.log("server listening on port :",port)
})