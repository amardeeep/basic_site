var http = require("http");
var url = require("url");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("files/index.html", (err, data) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
