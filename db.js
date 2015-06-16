//db.js
var async = require("async");
var sqlite = require("sqlite3");
var db; //this db will be used across module
//create users
var users = {//no uppercase, create users
  patricia: {
    id: "patricia",
    password: "wxyz",
    name: "Patricia Barker"
  },
  visitor: {
    id: "visitor",
    password: "password",
    name: "Guest"
  }
};

var database = {
  connection: null,
  init: function(ready) {//add connection to db
    var db = database.connection = new sqlite.Database("posts.db", function(err) {
      if (err) {
        console.error("Could not open Posts database");
        process.exit(1);
      }

      //store the connecction for outside modules to use directly
      database.connection = db;

      //create tables and execute ready callback when done
      async.parallel([
        function(c) {// add slug, updated_at and created_at
          db.run("CREATE TABLE IF NOT EXISTS posts (title, slug, content, author, category, tag, created_at, updated_at, meta);", c);
        },// add slug
        function(c) {
          db.run("CREATE TABLE IF NOT EXISTS users (username, session, password);", c);//AVOID CAPS, cc ok
        },
        function(c) {
          db.run("INSERT INTO users (username, password) VALUES ($username, $password);", {
            $username: "Patricia",
            $password: "4256pbb"
          }, c);
        },//create visitor default login
        db.run("INSERT INTO users (username, password) VALUES ($username, $password);", {
          $username: "visitor",
          $password: "welcome"
        }, c)
      ], function(err) {//call the Database, bind
          db.all("SELECT * FROM users", console.log.bind(console));
            console.log(err);
        if (ready) ready(err);
      });
    });
  },
  getALLPosts: function(c) {//create order of posts here =>look up created_at
    db.all("SELECT *, rowid FROM posts ORDER BY created_at DESC;", c);
  }
};
//call database
module.exports = database;
