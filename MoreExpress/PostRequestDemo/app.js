var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["tony", "miranda", "justin", "lily"];

app.get("/", function(req, res) {
   res.render("home"); 
   res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends, friends});
});

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server stated");
});