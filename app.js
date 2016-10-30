var express = require('express');

var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
 res.render('index');
});

app.get("/index",function(req,res){
 res.render('index');
});
app.get("/registro",function(req,res){
 res.render('registro');
});
app.get("/appcitas/citas",function(req,res){
 res.render('citas');
});


app.listen(3000);
console.log("ya está corriendo mi servidor");
