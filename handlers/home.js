//home.js
var db = require("../db");

module.exports = function(req, reply) {
  db.getAllBlogs(function(err, posts) {
    posts.forEach(function(post) {
      post.truncated = post.content.substr(0, 2);//shorten the content
    })
    reply.view("index", {
      posts: posts,
      title: "Home",
    });
  })
};
