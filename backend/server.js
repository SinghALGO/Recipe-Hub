// load .env data into process.env
require('dotenv').config();

//Web server config
const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser    = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
 // Added body parser for json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use cookie sessions
app.use(cookieSession({
  name: 'session',
  keys: ['MySecret']
}));

//TODO: remove only for testing 
app.get('/', (req, res) => {
  res.status(200).json({message: 'success'});
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
