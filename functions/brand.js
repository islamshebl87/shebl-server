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
      console.log("Meeeeeeesa : " + JSON.stringify(product.fields.price));
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
      // console.log(typeof product.fields.price);
      console.log("Record: ",records);
      console.log("Images: ", product.fields.brandsimg[0].thumbnails.full.url);
      console.log("Time: ", product.createdTime);
      console.log("Time Now: ", product.fields.time);
      // console.log("Product: " , products);
      const { id } = product;
      const { total } = product.fields.price;
      const { name, image, price, color, brands, brandsimg, thumbnails,time} =
        product.fields;

      const url = brandsimg[0].url;

      return {
        id,
        name,
        url,
        price,
        color,
        brands,
        brandsimg,
        thumbnails,
        time,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server error",
    };
  }
};
