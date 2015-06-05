//getPost.js

var Blog = require("../models/blog");

module.exports = function(req, reply) {
  var id = req.params.id;
  var model = new Blog({
    id: id
  });
  //new Blogs do not need to load from the db
  if (id == "new") {
    return reply.view("project", {
      title: "New Blog",
      blog: model.JSON()
    });
  }//get model detail and then return the page
  model.set("id", id);
  model.load(function(err) {
    var data;
    if (err) {
      console.log(err);
    } else {
      data = model.toJSON();
    }
    reply.view("blog", {
      title: data.name,
      blog: data
    });
  });
};
