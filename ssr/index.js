const express = require("express");
const path = require("path");

const mainController = require("./controllers/main");

const port = 3001;
const app = express();

/* Configura template engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* Rotas */
app.get("/all", mainController.getAllContacts);
app.get("/", mainController.getParcialContacts);

/* Abre servidor */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
