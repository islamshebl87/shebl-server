const person = 'shebl' ;
exports.handler = async (event, context, cb) => {
    console.log("Event is : " + JSON.stringify(event))
    console.log("Context is : " + JSON.stringify(context));
  return {
      
    statusCode: 200,
    body: 'Our First Netlify 2nd version',
    // body: person,
  };
};
