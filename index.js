const express = require("express");

const app = express();

// подключаем шаблонизатор ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/user/:username", (req, res) => {
  let data = {
    username: req.params.username,
    hobbies: ["Football", "Golf", "Drinking"],
  };

  res.render("user", data);
});

app.post("/check-user", (req, res) => {
  const username = req.body.username;
  if (username == "") return res.redirect("/");
  else return res.redirect("/user/" + username);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started: http://localhost:${PORT}`);
});

// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });

//   if (request.url == "/") fs.createReadStream("./tamplates/index.html").pipe(response);
//   else if (request.url == "/about") fs.createReadStream("./tamplates/about.html").pipe(response);
//   else fs.createReadStream("./tamplates/error.html").pipe(response);
// });

// const PORT = 3000;
// const HOST = "localhost";

// server.listen(PORT, HOST, () => {
//   console.log(`Сервер запущен: http://${HOST}:${PORT}`);
// });
