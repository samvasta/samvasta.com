var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var server = express();

//Middleware
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"), path.join(__dirname, "views/procgen"), path.join(__dirname, "views/tinkering"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use(express.static(__dirname));
server.use(express.static(path.join(__dirname, "static")));
server.use(express.static(path.join(__dirname, "static/css")));
server.use(express.static(path.join(__dirname, "static/js")));

//Routes
server.get("/", GET_index);
server.get("/portfolio", GET_portfolio);
server.get("/procgen", GET_procgen);
server.get("/procgen/:page", GET_procgen_details);

server.get("/tinkering", GET_tinkering)
server.get("/tinkering/:page", GET_tinkering_details);
server.get("/art", GET_art);

server.get("/resume", GET_resume);

//Start server
server.listen(80, '0.0.0.0', function(){
    console.log("server started on port 80");
});



//GET
function GET_index(req, res){
  res.render("index", {pageName: "home"});
}

function GET_portfolio(req, res){
  res.render("portfolio", {pageName: "portfolio", title:"Sam's Portfolio Projects"});
}

function GET_procgen(req, res){
    res.render("procgenhome", {pageName: "procgen", title: "Procedural Generation Projects"});
}

function GET_procgen_details(req, res){
  res.render("procgen/" + req.params.page, {pageName: "procgen", 'procgen_name':req.params.page, title:"Procedural Generation Projects"});
}

function GET_tinkering(req, res){
    res.render("tinkering", {pageName: "tinkering", title: "Tinkering Projects"});
}

function GET_tinkering_details(req, res){
  res.render("tinkering/" + req.params.page, {pageName: "tinkering", 'tinkering_name':req.params.page, title:"Tinkering Projects"});
}

function GET_art(req, res){
    res.render("art", {pageName: "art", title: "Traditional Art"});
}

function GET_resume(req, res) {
    res.render("resume", {pageName: "resume", title: "Sam Vasta's Resume"});
}