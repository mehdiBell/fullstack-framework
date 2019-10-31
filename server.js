const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

/*
 ** You need to use mongoDB locally with this config
 ** You could use Robo3T to see the DataBase
 ** Kill properly the DB when you quit the app
 */
mongoose
  .connect('mongodb://localhost/NameOfPorject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));

// Test route
app.get('/', (req, res) => res.send('API Running'));

// Routes using router at localhost:5000/test
app.use('/test', require('./routes/test'))

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`)
  } catch(err) {
    console.log(err);
  }
});
