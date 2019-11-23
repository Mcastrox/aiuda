const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
var http = require('http');
var server = http.Server(app)

// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

  // conccion remota 

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  }) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));
  
// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
}); 
