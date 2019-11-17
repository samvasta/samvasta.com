var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var server = express();

//Middleware
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use(express.static(path.join(__dirname, "static")));
server.use(express.static(path.join(__dirname, "static/css")));
server.use(express.static(path.join(__dirname, "static/js")));

//Routes
server.get("/", GET_index);
server.get("/design", GET_design);
server.get("/portfolio", GET_portfolio);
server.get("/procgen", GET_procgen)
server.get("/procgen/:page", GET_procgen_details);


//Start server
server.listen(80, function(){
    console.log("server started on port 80");
});



//GET
function GET_index(req, res){
  res.render("index", {pageName: "home"});
}

function GET_design(req, res){
  res.render("design", {pageName: "design"});
}

function GET_portfolio(req, res){
  res.render("portfolio", {pageName: "portfolio", title:"Sam's Portfolio Projects"});
}

function GET_procgen(req, res){
    res.render("procgen", {pageName: "procgen", title: "Procedural Generation Projects"});
}

function GET_procgen_details(req, res){
  res.render("procgen/" + req.params.page, {pageName: "procgen", 'procgen_name':req.params.page, title:"Procedural Generation Projects"});
}