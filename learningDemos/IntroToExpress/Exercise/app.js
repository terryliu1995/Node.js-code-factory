var express = require("express");
var app = express();

var dict = {
    "cow" : " \'Moo\'",
    "pig" : " \'Oink\'",
    "dog" : " \'Woof Woof!\'"
}
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment"); 
});

app.get("/speak/:name", function(req, res) {
    var name = req.params.name.toLowerCase();
    if (dict.hasOwnProperty(name)) {
        res.send("The " + name + " says" + dict[name]);
    } else {
        res.send("Sorry, page not found...what are you doing with your lifr?");
    }
    
});

app.get("/repeat/:repeater/:number", function(req, res) {
    var repeater = req.params.repeater.toLowerCase();
    var n = Number(req.params.number);
    var output = "";
    for (var i = 0; i < n; i ++) {
        output += " " + repeater;
    }
    res.send(output);
});

//page not found
app.get("*", function(req, res) {
    res.send("Sorry, page not found...what are you doing with your lifr?");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("started");
});