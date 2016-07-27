// Let's build a server!
var express = require('express'),
  port = process.env.PORT || 3000, // port number in bashrc or 3000
  app = express();

app.use(express.static('./'));   // specify directory for static files

// request - method, headers, urls
// response - status, headers, body
app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
