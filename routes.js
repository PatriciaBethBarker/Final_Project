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
  path: "/posts/{id}",//new post
  method: "GET",
  handler: require("./handlers/addPost") {
}, {
  path: "posts/{id}",//edit post
  method: "GET",
  handlers: require("./handlers/editPost") {
}, {
  path: "posts/{id}",
  method: "GET",
  handlers: require("./handlers/getPost") {
}, {
  path: "posts/{id}",//save post
  method: "GET",
  handlers: require("./handlers/savePost") {
}, {//create single page view
  path: "posts/{id}",
  method: "GET",
  handlers: require("./handlers/viewPost") {
}, {
  path: "/{id}",//login
  method: "GET",
  handlers: require("./handlers/getLogin") {
}, {
  path: "posts/{id}",
  method: "GET",
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
