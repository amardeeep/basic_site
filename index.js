var http = require("http");
var url = require("url");
var fs = require("fs");
http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    console.log(q.pathname);
    if (q.pathname == "/") {
      fs.readFile("files/index.html", (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (
      q.pathname === "/index" ||
      q.pathname === "/about" ||
      q.pathname === "/contactme"
    ) {
      var filename = "files" + q.pathname + ".html";
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("files/404.html", (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
