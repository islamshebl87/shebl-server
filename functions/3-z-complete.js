require('dotenv').config()
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base('appDyQAhKmPQk7edJ')
//   appDyQAhKmPQk7edJ
//   .base("appYq3DxwKR3B1cej")
  .table("products");

exports.handler = async (event,context,cb) =>{
    const {id} = event.queryStringParameters
    console.log(event.queryStringParameters);
    if(id){
        try {
            const product = await airtable.retrieve(id)
            if (product.error) {
                return{
                    statusCode: 404,
                    body: `No Product with ID: ${id}`,
            } 
            }
            return{
                statusCode: 200,
                body: JSON.stringify(product),
        }
            
        } catch (error) {
            return{
                statusCode: 500,
                body: `server error`,
        } 
            
        }
        }
        try {
            const {records} = await airtable.list()
            const products = records.map((product)=>{
                const { id } = product
                const { name, image, price,color } = product.fields
                const url = image[0].url
                return { id, name, url, price,color }
    
            })
            return {
                statusCode: 200,
                body: JSON.stringify(products),
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Server error',
            }
        }
}
