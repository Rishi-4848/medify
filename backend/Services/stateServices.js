const { default: axios } = require("axios")

class stateServices {

  fetchStates =async ()=>{
     try{
      
      let result =await axios('https://meddata-backend.onrender.com/states').then((res)=>{
       return res.data
      })

      return result

     }catch(err){
        throw new Error(err)
     }
  }
}

module.exports =  stateServices