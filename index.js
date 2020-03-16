const express = require('express');
const path = require('path');
const app = express();
const expressHbs = require('express-handlebars');
const session = require('express-session');
const loginRoutes = require('./routes/index');
const artistsRoutes = require('./routes/artists');

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(loginRoutes);
app.use(artistsRoutes);

app.listen(process.env.PORT || 3000, () => console.log("server is ready!"));