const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers');

const app = express();
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));