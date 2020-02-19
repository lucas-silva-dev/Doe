const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.listen(4000, () => console.log("iniciei o servidor!"));
