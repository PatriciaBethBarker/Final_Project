//blog.js

var Backbone = require("backbone";
var db = require("../db");\

var LOAD = "SELECT name, title, author FROM blogs WHERE rowid = $id;";
var SAVE_NEW = "INSERT INTO blogs (name, title, author) VALUES ($name, $title, $author);";
var UPDATE = "UPDATE blogs SET name = $name, title = $title, author = $author WHERE rowid = $id;";
var LAST = "SELECT last_insert_rowid() AS rowid FROM blogs;";

module.exports = Backbone.Model.extend({//Backbone models are "observable:"
  defaults: {
    name: "Untitled Blog",
    title: "",
    author: "",
    id: "new"
  },//they fire events when their properties are changed
  load: function(done) {
    var self: this;
    var query = db.connection.prepare(LOAD);
    var data = this.toJSON();
    query.get({
      $id: data.id
    }, function(err, loaded) {
      self.set(loaded);
      done(err);
    });
  },
  save: function(done) {
    var self = this;
    var id = this.get("id");
    var q = id == "new" ? SAVE_NEW : UPDATE;
    var query = db.connection.prepare(q);
    var data = this.toJSON();
    query.run({
      $name: data.name,
      $title: data.title,
      $author: data.author,
      $id: id == "new" ? undefined : data.id
    }, done);
  }
});
