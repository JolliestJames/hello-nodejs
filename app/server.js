var express = require("express");
var app = express();
var say = require("./say");

app.get("/say/hello", function(req, res) {
  res.send(say.helloTo(req.query.name));
});

app.get("/say/the-sum", function(req, res) {
  res.send(say.theSum(req.query.left, req.query.right));
});

app.get("/say/the-quotient", function(req, res) {
  res.send(say.theQuotient(req.query.left, req.query.right));
});

app.get("/say/the-product", function(req, res) {
  res.send(say.theProduct(req.query.left, req.query.right));
});

app.get("/say/the-difference", function(req, res) {
  res.send(say.theDifference(req.query.left, req.query.right));
});

app.get("/say/the-remainder", function(req, res) {
  res.send(say.theRemainder(req.query.left, req.query.right));
});

app.listen(3000);