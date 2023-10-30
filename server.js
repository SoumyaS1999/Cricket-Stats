const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controller/error');
const sequelize = require('./util/database');

//const User=require('./models/User.js');
//const Expense=require('./models/Expense.js');
const Player=require('./models/Player.js');

var cors=require('cors');

const app = express();

app.use(cors());

app.set('views', 'views');

//const userRoutes=require('./routes/user');
//const expenseRoutes=require('./routes/expense');
const playerRoutes=require('./routes/player');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/User',userRoutes);
//app.use('/Expense',expenseRoutes);
app.use('/Player',playerRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });