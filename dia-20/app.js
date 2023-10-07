require('dotenv').config();

const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.connectionstring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('conexao feita');
  app.emit('pronto');
})
.catch((e) => {
  console.log(e);
});

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');

const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

const sessionOptions = session({
  secret: '123456',
  store: MongoStore.create({mongoUrl: process.env.connectionstring}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 24 * 7,
    httpOnly: true
  },
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src',  'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);

app.use(routes);

const port = 4002;
app.on('pronto', () => {
  app.listen(port, () =>{
    console.log();
    console.log(`Escutando na porta ${port}`);
    console.log(`CTRL + Clique em http://localhost:${port}`);
  })
});
