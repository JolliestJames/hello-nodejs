var express = require("express");
var app = express();
var say = require("./say");

app.get("/say/hello", function(req, res) {
  res.send(say.helloTo(req.query.name));
});

app.get("/say/the-sum", function(req, res) {
  res.send(say.theSum(req.query.left, req.query.right));
});

app.listen(3000);