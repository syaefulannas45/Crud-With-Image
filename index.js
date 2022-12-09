//IMPORTS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");


const app = express();
const PORT = process.env.PORT || 4000;

//DataBase Connection
mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connect to database"));

//middleWares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.use(express.static('uploads'))
//SET TEMPLATE
app.set("view engine", "ejs");

//Route Prefix
app.use("", require('./routes/routes'))


app.listen(PORT, () => {
  console.log("Server Konek pada http://localhost:5000" + PORT);
});

