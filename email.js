const nodemailer = require('nodemailer');

const sendMessage = async (email, name, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smpt.gmail.com',
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const options = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Get In-Touch',

      html: `
            <div style="width: 100%; max-width: 500px; display: block; margin: auto">
            <h2>From ${name}</h2>
              <p>
               ${message}
              </p>
            </section>
          </div>
        
            `,
    };

    const emailSent = await transporter.sendMail(options);
    console.log(emailSent);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMessage;
