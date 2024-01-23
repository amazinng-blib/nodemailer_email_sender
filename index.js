const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sendMessage = require('./email');
dotenv.config();

const app = express();
app.use(express.json());

// app.use(cors());

const developmentOrigin = ['http://localhost:3000', 'http://localhost:3001'];
const productionOrigin = [
  'https://portfolio-2u6f.vercel.app',
  'portfolio-2u6f.vercel.app',
];

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? productionOrigin
        : developmentOrigin,
  })
);

const emailRoutes = require('./routes/EmialRoutes');

app.use('/email', emailRoutes);

// app.post('/send-mail', async (req, res) => {
//   try {
//     const { name, email, message } = req?.body;
//     if ((name, email, message)) {
//       sendMessage(email, name, message);
//       return res.status(200).json({ message: 'Message Sent' });
//     }

//     return res
//       .status(400)
//       .json({ message: 'Please, fill-out the form and send' });
//   } catch (error) {
//     res.status(500).json(error?.message);
//   }
// });

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server connected at http://localhost:${PORT}`);
});
