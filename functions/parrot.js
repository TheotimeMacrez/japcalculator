exports.handler = async function(event, context) {
  
  const requestBody = event.body;
  const message = requestBody.message;
  
  if (message == null) {
    return {
      statusCode: 200,
      body: JSON.stringify({message: message})
    }
  }
  
  else {
    return {
      statusCode: 400,
      body: JSON.stringify({message: "Pas de message"})
    }
  }
  
};
