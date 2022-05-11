const express = require("express");
const path = require("path");
const cors = require("cors");

const mainController = require("./controllers/main");

const port = 8000;
const app = express();

/* Configura cors */
app.use(cors());

/* Rotas */
app.get("/all", mainController.getAllContacts);
app.get("/parcial", mainController.getParcialContacts);

/* Abre servidor */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
