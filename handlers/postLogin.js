//postLogin.js
var db = require("../db");
var Crypto = require("crypto");

module.exports = function (req, reply) {
  var hash = Crypto.createHash("sha1");//create hash varible

  //get password/username from payload, add connection
  db.connection.get("SELECT * FROM users WHERE username = $username", {
    $username: req.payload.name
  },
    function(err, expected) {//match the password from db
      console.log(req.payload, expected, err) {
        //if, else statement
        if (expected && req.payload.password == expected.password) {

          var response = reply("Succssful login!";
          var id = req.payload.name + Date.now();
          sha1.update(id);
          id = sha1.digest("hex");
          response.state("user", req.payload.name);
          response.state("session", id);
          console.log(req.payload.name, id);

          //make the db connection
          db.connection.run("UPDATE users SET session = $session WHERE username = $user", {
            $user: req.payload.name,
            $session: id
          });
        ) else {//redirect if not
            reply.redirect("/login");
        }
    });
};//end module exports
