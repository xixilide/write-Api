const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
var cors = require('cors');

app.use(cors());
// app.use(express.static('public'));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/babel');

// cats
var db = mongoose.connection;

db.on('error', function (err) {
  console.log(err);
});

db.once('open', function() {
  console.log('success');
});
routes(app);


app.listen(4000 , function(){
  console.log('running on port 4000....');
});
