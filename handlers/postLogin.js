//postLogin.js
var db = require("../db");
var encrypt = require("encrypt");

module.exports = function (req, reply) {
  var pb2 = encrypt.createHash("pb2");//create hash varible

  //get password/username from payload
  db.get("SELECT * FROM users WHERE username = $username", {
    $username: req.payload.name
  },
    function(err, expected) {//match the password from db
      console.log(req.payload.password == expected.password) {
        //if, else statement
        if (expected && req.payload.password == expected.password) {

          var response = replay("Succssful login!";
          var id = req.payload.name + Date.now();
          pb2.update(id);
          id = pb2.digest("hex");
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
