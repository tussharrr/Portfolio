const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: ["http://localhost:5173"], // The frontend URL
  }));


app.use(express.json());
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/hello');

const ContactSchema = new mongoose.Schema({
  name: String,
  company: String,
  mobile: String,
  email: String,
});

const Contact = mongoose.model('Contact', ContactSchema);


app.post('/api/contact', async (req, res) => {
  const { name, company, mobile, email } = req.body;
  console.log(req.body)

 console.log()
  try {
    const newContact = new Contact({ name, company, mobile, email });
    await newContact.save();
    res.status(200).json({ message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
