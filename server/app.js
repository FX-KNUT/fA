const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const LokiStore = require('connect-loki')(session);
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();

const indexRouter = require('./src/routes');
const passportConfig = require('./src/passport/index');

const port = process.env.SERVER_PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.COOKIE_SECRET || 'akjlk%dalkds#2dfk',
  store: new LokiStore(),
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

mongoose
  .connect('mongodb://localhost:27017/fa', { useNewUrlParser: true })
  .then(() => console.log('Connect mongoose.'))
  .catch(err => console.error(err.message));

app.use(indexRouter);

const server = app.listen(port, () => console.log('Server is listening on ' + port));