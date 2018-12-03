var express = require("express");
var app = express();

//serve public files in public directory
app.use(express.static("public"));
// render view use ejs files
app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("home"); 
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing  = req.params.thing;
    res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "post1", author : "Susy"},
        {title: "post2", author : "Charlie"},
        {title: "post3", author : "Rusty"}
    ];
    res.render("posts", {posts : posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("start"); 
});