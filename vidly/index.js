const mongoose = require('mongoose')
const express = require("express");
const app = express();
const genres = require('./routes/genres');

mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...'))

app.use(express.json());
app.use('/api/genres', genres)

const port = process.env.PORT || 3000;
app.listen(port, () => { 
  console.log(`Listening on port ${port}...`);
});
