require('dotenv').config()
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appYq3DxwKR3B1cej")
  .table("products");

exports.handler = async (event,context,cb) =>{
    const {id} = event.queryStringParameters
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
    return {
        statusCode: 400,
        body: 'please provide product id',
    }
}
