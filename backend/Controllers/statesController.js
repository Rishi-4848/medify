
const stateServices = require("../Services/stateServices")
const stateServicesInsta = new stateServices()



const fetchStates =async (req,res)=>{

  try{

    const result = await stateServicesInsta.fetchStates()
   res.status(200).send(result)
  }catch(err){
    throw new Error("failed to fetch the states..!")
  }

}


module.exports = {fetchStates}