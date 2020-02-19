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

// configura a apresentação da página
server.get("/", (req, res) => {
  return res.render("./index.html", { donors });
});

server.post("/", (req, res) => {
  // pegar dados do form
  const { name, email, blood } = req.body;

  donors.push({ name, blood });

  return res.redirect("/");
});

// iniciar um servidor e permitir acesso na porta 4444
server.listen(4444, () => console.log("iniciei o servidor!"));
