exports.handler = async function(event, context) {
  const { payload } = JSON.parse(event.body);
  console.log('Form submission received!', payload);
  
  // Here you could send emails, store data in a database, etc.
  // For example, sending via email services like SendGrid or Mailgun

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission received" })
  };
}; 