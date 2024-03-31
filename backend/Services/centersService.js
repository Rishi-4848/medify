const { default: axios } = require("axios")

class centersServices {

  fetchCenters =async (state,city)=>{

    try{
      let result = await axios(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`).then((res)=>{
        return res.data
      })

      return result

    }catch(err){
      throw new Error(err)
    }
  }
}

module.exports = centersServices