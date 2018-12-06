var express = require("express");

var app = express();



app.get('/', function(req, res) {
    res.send("hello world!");
});

app.get("/bye", function(req, res) {
    res.send("goodbye!");
});

app.get("/dog", function(req, res) {
    res.send("meow!");
})

app.get("/:subtitle/comments/:title/:name", function(req, res) {
    res.send("you are in subtitle comments");
})
// any other request, order matters
app.get("*", function(req, res) {
    res.send("you are a star");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("started");
});