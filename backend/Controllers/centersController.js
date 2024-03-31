const centersServices = require("../Services/centersService")
const centersServicesInsta = new centersServices()


const fetchCenters = async(req,res)=>{

  try{
      
  let {state,city} = req.query

  const result = await centersServicesInsta.fetchCenters(state,city)

  res.status(200).send(result)

  }catch(err){
    throw new Error(err)
  }
}

module.exports = {
  fetchCenters
}