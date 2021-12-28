require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appDyQAhKmPQk7edJ")
  //   appDyQAhKmPQk7edJ
  // .base("appYq3DxwKR3B1cej")
  .base("appn7w4n2QgPZ7gHW")
  .table("mobile");

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  console.log(event.queryStringParameters);
  
  if (id) {
    
    try {
      const product = await airtable.retrieve(id);
      console.log("price : " + JSON.stringify(product.fields.price))
      console.log("desc : " + JSON.stringify(product.fields.desc))
      console.log("fields : " + JSON.stringify(product.fields))
      if (product.error) {
        return {
          statusCode: 404,
          body: `No Product with ID: ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `server error`,
      };
    }
  }
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      // console.log(typeof product.fields.name);
      // console.log(product);
      const { id } = product; 
      
      const { name, image, price, color,time  } = product.fields;
      
      const url = image[0].url;
      
      return { id, name, url, price, color,  time};
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server error",
    };
  }
};
