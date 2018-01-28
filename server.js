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
server.get("/portfolio/:page", GET_portfolio_details);



//Start server
server.listen(3000, function(){
    console.log("server started on port 3000");
});



//GET
function GET_index(req, res){
  res.render("index", {pageName: "home"});
}

function GET_design(req, res){
  res.render("design", {pageName: "design"});
}

function GET_portfolio(req, res){
  res.render("portfolio", {pageName: "portfolio", title:"Sam's Portfolio"});
}

function GET_portfolio_details(req, res){
  res.render("portfolio/" + req.params.page, {pageName: "portfolio", 'portfolio_name':req.params.page, title:"Sam's Portfolio"});
}