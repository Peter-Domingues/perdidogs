const express = require("express");
const cors = require('cors');
require("dotenv").config();

const inundogsController = require("./controllers/inundogs.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/inundogs", (req, res) => {
  inundogsController.getInundogs().then((data) => res.json(data));
});

app.post("/api/inundog", (req, res) => {
  console.log(req.body);
  inundogsController
    .createInundog(req.body)
    .then((data) => res.json(data));
});

app.put("/api/inundog/:id", (req, res) => {
  inundogsController
    .updateInundog({ _id: req.params.id }, req.body)
    .then((data) => res.json(data));
});

app.delete("/api/inundog/:id", (req, res) => {
  inundogsController
    .deleteInundog(req.params.id)
    .then((data) => res.json(data));
});

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Inundogs</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
