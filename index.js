var hapi = require("hapi");

var server = new hapi.Server();
server.connection({port: 8000});//listen using the connection function
server.start();

server.views({
  path: ".",
  engines: {
    html: require("handlebars")
  },
isCached: false
})
//register the routes, once matched, I want a response
server.route({
  method: "GET", //use a method - GET, POST, PUT, DELETE
  path: "/", //route path
  handler: function(request, reply){ //function called when it gets request from outside, 2 argu
  //  reply.view(index, {
  //    title: "Hello Bloggers"
  //  });
    console.log(request.headers);
    console.log(request.params);
    reply("Hello from me");
  }
});

//server.route({
//  method: "GET", //
//  path: "/public/{param*}",//matches the name in your html files
//  handler: function(request, reply){
//    directory: {
//      path: "build"
//    }
//  }
//});
