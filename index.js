const http = require("http");
const fs = require("fs");

let server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });

  if (request.url == "/") fs.createReadStream("./tamplates/index.html").pipe(response);
  else if (request.url == "/about") fs.createReadStream("./tamplates/about.html").pipe(response);
  else fs.createReadStream("./tamplates/error.html").pipe(response);
});

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Сервер запущен: http://${HOST}:${PORT}`);
});
