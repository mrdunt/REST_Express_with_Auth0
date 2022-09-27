const express = require('express');
const { auth } = require('express-openid-connect');
const indexRouter = require('./routes/index.js');
const app = express();
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'BE8IXmXmUXDOPIvfZ5pjaQJqedzC5TxI',
    issuerBaseURL: 'https://dev-9afji0hb.us.auth0.com'
  };

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(auth(config));
app.use("/", indexRouter);

app.listen(3000, () => {
    console.log("App is running !");
});