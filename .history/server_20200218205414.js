const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

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
  const { name, email, blood } = req.body;

  donors.push({ name, blood });

  return res.redirect("/");
});

server.listen(4444, () => console.log("iniciei o servidor!"));
