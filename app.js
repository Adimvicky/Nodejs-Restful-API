const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviedb'); 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function(){
    console.log('MongoDB connected');
})

var index = require('./routes/index');
var movies = require('./routes/movies');

const app = express();

app.use(bodyParser.json());

app.use('/', index);
app.use('/api/v1/movies', movies);



app.listen(3000, function(){
    console.log('Server running on port 3000..')
})