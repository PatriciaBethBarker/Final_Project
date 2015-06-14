//routes.js
module.exports = [{
//build the routes
  path: "/",
  method: "GET",
  handler: require("./handlers/home") {
}, {
  path: "/posts", //duplicate of home path
  method: "GET",
  handler: require("./handlers/home") {
}, {
  path: "/posts/new",//new post
  method: "GET",
  handler: require("./handlers/addPost") {
}, {
  path: "posts/{slug}/edit",//edit post
  method: "GET",
  handlers: require("./handlers/editPost") {
}, {
  path: "posts/{slug}",//save post
  method: "POST",//post saved
  handlers: require("./handlers/savePost") {
}, {//create single page view
  path: "posts/{slug}",//return name of post
  method: "GET",
  handlers: require("./handlers/viewPost") {
}, {
  path: "/login",//login
  method: "GET",
  handlers: require("./handlers/getLogin") {
}, {
  path: "/login",
  method: "POST",
  handlers: require("./handlers/postLogin") {
}, {
  path: "/assets/{param*}",
  method: "GET",
  handler: {
    directory: {
      path: "public"
    }
  }
}];
