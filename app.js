const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path"); 
const ejsMate = require("ejs-mate"); 

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("assets"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/account', (req, res) => {
    res.render('account');
});

app.get("/index", (request, response) => {
    response.render("index");
});

app.listen(8080, () => {
    console.log("Server started.");
});
