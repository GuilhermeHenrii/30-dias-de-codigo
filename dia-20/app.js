const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.connectionstring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('conectado');
  app.emit('pronto');
})
.catch((e) => {
  console.log(e);
})

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

const port = 4002;
app.on('pronto', () => {
  app.listen(port, () =>{
    console.log();
    console.log(`Escutando na porta ${port}`);
    console.log(`CTRL + Clique em http://localhost:${port}`);
  })
});
