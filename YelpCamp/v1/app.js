var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
            {name : "a", image : "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
            {name : "a", image : "https://farm3.staticflickr.com/2924/14465824873_026aa469d7.jpg"},
            {name : "a", image : "https://farm9.staticflickr.com/8319/7930464260_17dfcc5715.jpg"},
            {name : "a", image : "https://farm9.staticflickr.com/8671/16642502436_e6d611bcb5.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res) {
    res.render("campgrounds", {campgrounds : campgrounds}); 
});

app.post("/campgrounds", function (req, res) {
    //get data
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name : name, image : image};
    campgrounds.push(newCampground);
    //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("started");
});