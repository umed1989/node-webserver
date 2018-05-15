const express = require("express");
const hbs = require("hbs");

const app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  next();
});

app.get("/home", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear(),
    welcomeMessage: "Welcome back"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    error: "can not log in"
  });
});

app.listen(3000, () => console.log("Server is started at port 3000"));
