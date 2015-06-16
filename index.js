//index.js

var hapi = require("hapi");
var db = require("./db");
var Routes = require("./routes");

var server = new hapi.Server( {
  //add connection settings, remove trailing slash in url
  connections: {
    router: {
      isCaseSensitive: true,
      stripTrailingSlash: false
    }
  }
});

// Register the plugin
server.register(require('hapi-auth-cookie'),
  function (err) {

    // Set strategy
    server.auth.strategy('session', 'cookie', {
        password: 'secret', // cookie secret
        cookie: 'session', // Cookie name
        redirectTo: "/login", // handle our own redirections
        isSecure: false, // required for non-https applications
        ttl: 24* 60 * 60 * 1000 // Set session to 1 day
    });
  });

    // Print some info about the incoming request for debugging purposes
    server.ext('onRequest', function (request, next) {
      // Change all requests to '/test'
        //request.setUrl('/test');
        console.log(request.path, request.query);
        return reply.continue();
    });

    server.route(Routes.endpoints);

    // Start the server
server.connection({ port: 8000 });//listen using the connection function
db.init(function(err) {//this is the ready function
  //if error statement
  if (err) {
    return console.error("db err", err);
  }
  console.log("Database ready, start server.");
  server.start(function() {
    console.log("Server Ready");
  });
});

server.views({
//register the templates
  engines: {
    html: require("handlebars")
  },
  path: "views/templates", //"templates"
  layoutPath: "views",
  layout: "default",
  //add partials path here
    partialsPath: "views/templates/partials",
isCached: false
});
//register the routes, once matched, I want a response

//var counter = 0;//this state lives outside the route/request, counter will stick around and the value will reset; see line 32, 33

server.route({
  method: "GET", //use a method - GET, POST, PUT, DELETE
  path: "/", //route path, i.e., {name?} name must be there or undefined
  //path: "/{name?}",
  handler: function(req, reply){ //function called when it gets request from outside, 2 argu
    reply.view("index", {  //load index off the hardrive and use it
      title: "Hello Bloggers" //
    });
  //console.log(request.headers);
  //console.log(request.params);
    //reply("Hello, " + request.params.name + ", from me"); //pre-sanitized for us

  //var name = request.params.name ||
    //"Anonymous";   // typical way to handle defaults
    //counter++; //adds a counter everytime you call the function -> +1
    //reply("Hello, " + name + ", from me " + counter);//change the reply statement for request
  }
});//end route to index

var jsonObj = require("./posts.json"),
jsonObj = jsonObj.posts;

 server.route({
   method: "GET", //
    path: "/public/{param*}",//matches the name in your html files
    //path: "/{name}/{id}",
    handler: {
      directory: {
        path: "build"
        //reply(request.params.name + "|" + request.params.id);
    }
   }
 });
