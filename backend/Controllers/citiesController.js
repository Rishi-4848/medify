
const cityServies = require("../Services/citiesServices")
const cityServiesInsta = new cityServies()


const fetchCities = async (req,res)=>{

  try{

    const state = req.params.state

    const result = await cityServiesInsta.fetchCities(state)

    res.status(200).send(result)

  }catch(err){
      throw new Error(err)
  }
}


module.exports = {
  fetchCities
}