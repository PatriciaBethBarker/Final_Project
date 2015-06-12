//db.js
var async = require("async");
var sqlite = require("sqlite3");
var db; //this db will be used across module

var facade = {
  connection: null,
  init: function(ready) {
    db = new sqlite.Database("posts.db", function(err) {
      if (err) {
        console.error("Could not open Posts database");
        process.exit(1);
      }

      //store the connecction for outside modules to use directly
      facade.connection = db;

      //create tables and execute ready callbackwhen done
      async.parallel([
        function(c) {
          db.run("CREATE TABLE IF NOT EXISTS posts (title, content, author, category, tag, meta);", c);
        },
        function(c) {
          db.run("CREATE TABLE IF NOT EXISTS users (FirstName, LastName, Email, Password);", c);
        }
      ], function(err) {
        if (ready) ready(err);
      });
    });
  },
  getALLPosts: function(c) {
    db.all("SELECT FirstName, LastName, Email, rowid FROM xx;", c);
  }
};

module.exports = facade;
