const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    }
  });
  
  var mailOptions = {
    from: data.email,
    to: 'christineting.an@gmail.com',
    subject: `Message from ${data.name.toUpperCase()} sent via my personal website`,
    html: `<p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>`
  };
  
  smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
      res.send(error)
    }else {
      res.send('Success')
    }
    smtpTransport.close();
  });
}
module.exports = sendEmail;