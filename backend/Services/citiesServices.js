const { default: axios } = require("axios")

class cityServies{

  fetchCities = async (state)=>{
     
     try{ 

      let result =await axios(`https://meddata-backend.onrender.com/cities/${state}`).then((res)=>{
            return res.data
      })

      return result

     }catch(err){
        throw new Error(err)
     }
  }
}

module.exports = cityServies