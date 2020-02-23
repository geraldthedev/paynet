require('dotenv').config();
const fetch = require('node-fetch')

exports.handler = async(event, context)=>{

   fetch(`http://data.fixer.io/api/latest?access_key=${process.env.API_KEY}`, {headers:{ "Accept": "application/json"}})
   .then(response => response.json())
   .then(data =>({
       statusCode:200,
       body: data.rates
       
   })
   .then(res.send(data)))
   .catch(error =>({ statusCode: 422, body:String(error)}))
    
}