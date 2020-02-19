const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));

nunjucks.configure("./", {
  express: server
});

const donors = [
  {
    name: "Diego Fernandes",
    blood: "AB+"
  }
];

server.get("/", (req, res) => {
  return res.render("./index.html");
});

server.listen(4444, () => console.log("iniciei o servidor!"));
