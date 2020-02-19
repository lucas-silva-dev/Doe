const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));
server.use(express.json());

nunjucks.configure("./", {
  express: server,
  noCache: true
});

const donors = [
  {
    name: "Diego Fernandes",
    blood: "AB+"
  },
  {
    name: "Cleiton Souza",
    blood: "B+"
  },
  {
    name: "Robson Marques",
    blood: "A+"
  },
  {
    name: "Mayk Brito",
    blood: "O+"
  }
];

server.get("/", (req, res) => {
  return res.render("./index.html", { donors });
});

server.post("/", (req, res) => {
  console.log(req.body);
});

server.listen(4444, () => console.log("iniciei o servidor!"));
