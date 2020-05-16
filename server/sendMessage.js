const AWS = require('aws-sdk');

const sendMessage = (req, res) => {
  var data = req.body;
  AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: 'us-west-2'
  });

  const ses = new AWS.SES({ apiVersion: '2010-12-01' });
  const params = {
    Destination: {
      ToAddresses: ['christineting.an@gmail.com'] // Email address/addresses that you want to send your email
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data: `<html><body><h1>Message from ${data.name}</h1><p style="color:blue">${data.message}</p> <p>Reply to Email: ${data.email}</p></body></html>`
        },
        Text: {
          Charset: 'UTF-8',
          Data: `Message from ${data.name} ${data.message} ${data.email}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `[Personal Website] Message from ${data.name}`
      }
    },
    Source: 'christineting.an@gmail.com'
  };

  const sendEmail = ses.sendEmail(params).promise();

  sendEmail
    .then(data => {
      console.log('email submitted to SES', data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = sendMessage;
