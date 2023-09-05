const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const Sequelize = require('sequelize');
const app = express();

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
});

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
