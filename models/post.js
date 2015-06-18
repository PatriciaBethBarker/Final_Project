//blog.js
var Backbone = require("backbone");
var db = require("../db");
var moment = require("moment");
//models with key-value binding and custom events
var LOAD = "SELECT name, title, author FROM posts WHERE slug = $slug;";
var SAVE_NEW = "INSERT INTO posts (slug, title, author, content, created_at, formatted) VALUES ($slug, $title, $author, $content, datetime('now'), $formatted);";
var UPDATE = "UPDATE posts SET title = $title, author = $author WHERE slug = $slug;";
var LAST = "SELECT last_insert_rowid() AS rowid FROM posts;";

//Backbone models are observable
module.exports = Backbone.Model.extend({
  defaults: {
    title: "New posts",
    author: "Author Name",
    content: "",
    created_at: "",
    id: "new"
  },//they fire events when their properties are changed
  load: function(done) {  //load
    var self = this;
    var query = db.connection.prepare(LOAD);
    var data = this.toJSON();
    query.get({
      $slug: data.slug
    }, function(err, loaded) {
      self.set(loaded);
      done(err);
    });
  },
  save: function(done) { //save
    var self = this;
    var id = this.get("id");
      if (id == "new") {
        var query = db.connection.prepare(q);
        var data = this.toJSON();
        var slug = this.get("title").toLowerCase();

        query.run({
          $title: data.title,
          $author: data.author,
          $content: data.content,
          $id: id == "new" ? undefined : data.id,//format date
          $formatted: moment().format("MMMM Do YYYY, h:mm:ss a"),
          $slug: slug
        }, done);

      } else { //update

        query.run({
          $title: data.title,
          $content: data.content,
          $id: id == "new" ? undefined : data.id,
          $slug: slug
        }, done);
      }
  }
});
