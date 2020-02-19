// configurando o servidor
const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos estáticos
server.use(express.static("public"));

// Habilitar o body do formulário
server.use(express.urlencoded({ extended: true }));

// configurando a conexão com o banco de dados
const Pool = require("pg").Pool;
const db = new Pool({
  user: "postgres",
  password: "doe",
  host: "localhost",
  port: 5432,
  database: "doe"
});

// Configurando a template engine
const nunjucks = require("nunjucks");
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
