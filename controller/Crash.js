const axios = require("axios")

const Crashlist = async(req, res) =>{
    await axios.get('https://crashgame.herokuapp.com/api/crashgame/crashlist')
    .then((Response)=>{
        const RES = Response.data
        const n = 4;
        const result = RES. slice(-n)
        res.status(200).json(result)
    }) 
    .catch(err =>{
        res.status(500).json(err)
    })
 }
 module.exports = { Crashlist }