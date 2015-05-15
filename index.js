var hapi = require("hapi");

var server = new hapi.Server();
server.connection({ port: 8000 });
server.start();

server.views({
  path: ".",
  engines: {
    html: require("handlebars")
  },
isCached: false
})

server.route({
  method: "GET",
  path: "/",
  handler: function(req, reply){
    reply.view(index, {title: "Hello Bloggers"})
  }
});

server.route({
  method: "GET",
  path: "/public/{param*}",
  handler: {
    directory: {
      path: "build"
    }
  }
});
