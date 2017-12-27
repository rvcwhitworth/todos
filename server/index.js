const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers');
const morgan = require('morgan');

const app = express();
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/todos', controller.todos.get);
app.post('/todos', controller.todos.post);
app.put('/todos', controller.todos.put);
app.delete('/todos', controller.todos.delete);

app.post('/login', controller.login.post);
app.post('/signup', controller.signup.post);


const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log('listening on', port);
})