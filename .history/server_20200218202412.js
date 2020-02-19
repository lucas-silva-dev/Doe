const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

nunjucks.configure("./", {
  express: server
});

server.get("/", (req, res) => {
  return res.render("../frontend/index.html");
});

server.listen(4000, () => console.log("iniciei o servidor!"));
