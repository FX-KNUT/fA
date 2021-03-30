const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const LokiStore = require('connect-loki')(session);
const passport = require('passport');
const mongoose = require('mongoose');
const http = require('http');
require('dotenv').config();

const indexRouter = require('./src/routes');
const passportConfig = require('./src/passport/index');
const { config } = require('dotenv');

const port = process.env.SERVER_PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.COOKIE_SECRET || 'akjlk%dalkds#2dfk',
  store: new LokiStore(), // connect-loki 모듈이 아닌, mongodb를 store로 바꿀 예정.
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

const DB_URL = 'mongodb://localhost:27017/fa';

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connect mongoose.'))
  .catch(err => console.error(err.message));

mongoose.Promise = global.Promise;

const connectDB = () => {

    var database = mongoose.connection;
    var schema, userModel;

    database.on('error', console.error.bind(console, 'Connection Error.'));
    database.on('open', () => {
      console.log(`Connected! url is ${DB_URL}`);
      schema = mongoose.Schema({
        id: String,
        name: String,
        password: String
      });

      userModel = mongoose.model("user", schema);
      console.log("Done");
    });

    database.on('disconnected', () => {
      console.log("Disconnected. Trying to reconnect...");

    });

};


app.use(indexRouter);

http.createServer(app).listen(app.get('port'), () => { 
  console.log('Server is listening on port number ' + port);
  connectDB();
});

// const server = app.listen(port, () => { console.log('Server is listening on ' + app.get('port')); connectDB(); });