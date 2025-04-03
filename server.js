const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url == "/go") {
    res.end("dsa && dev..");
  } else {
    res.end("Hellow..");
  }
});

server.listen(5000);
