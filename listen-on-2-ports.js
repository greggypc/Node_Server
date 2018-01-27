// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
//var PORT = 7000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You're pretty" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server1.listen(7000, function() {

  // Log (server-side) when our server has started
  console.log("Server 1 listening on: http://localhost:" + 7000);
});

server2.listen(7500, function() {

  // Log (server-side) when our server has started
  console.log("Server 2 listening on: http://localhost:" + 7500);
});

