var mongoose = require("mongoose");
//connect to db
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to db
//create a cat called george with some attributes
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// // callback function, figure out whether its right or wrong
// george.save(function(err, cat){
//     if (err) {
//         console.log("wrong");
//     } else {
//         console.log("saved cat to db");
//         console.log(cat);
//     }
// });
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});
//retrieve all cats from the DB and console log
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("error");
        console.log(err);
    } else {
        console.log("all the cats");
        console.log(cats);   
    }
});