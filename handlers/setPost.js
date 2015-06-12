//setPosts.js
var db = require("../db");

module.exports = function(req, reply) {

var payload = req.payload;
var model = new Post(payload);
model.save(function(err) {
  if (err) {
    console.error(err);
  }

  var response = reply("Your post is saved!");
  response.statusCode = 302;
  response.headers.Location = "/posts";
  });
};
