const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: 'service_lbevjg6',
      template_id: 'template_vy3sbxn',
      user_id: 'mc5Q-casFpmnu8SuB',
      template_params: {
        name,
        email,
        message,
      },
    }),
  });

  if (response.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful!' }),
    };
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Form submission failed.' }),
    };
  }
};
