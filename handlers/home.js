//home.js
var db = require("../db");

module.exports = function(req, reply) {
  db.getAllBlogs(function(err, blogs) {
    reply.view("index", {
      blogs: blogs,
      title: "Home"
    });
  })
};
