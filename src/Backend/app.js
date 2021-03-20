const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();

const indexRouter = require('./src/routes');
const passportConfig = require('./src/passport');
passportConfig(passport);

const port = process.env.SERVER_PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET || '%idfsmfdldfo^FMD$',
  cookie: {
    httpOnly: true,
    secure: false
  }
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect('mongodb://localhost:27017/fa', { usenewUrlParser: true })
  .then(() => console.log('Connected mongoose.'))
  .catch(err => console.log(err.message)); 

app.use(indexRouter);

const server = app.listen(port, () => console.log('Server is listening on ' + port))