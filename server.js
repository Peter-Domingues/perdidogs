const express = require("express");
require("dotenv").config();

const inundogsController = require("./api/controllers/inundogs.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/inundogs", (req, res) => {
  inundogsController.getInundogs().then((data) => res.json(data));
});

app.post("/api/inundog", (req, res) => {
  console.log(req.body);
  inundogsController
    .createInundog(req.body.inundog)
    .then((data) => res.json(data));
});

app.put("/api/inundog/:id", (req, res) => {
  inundogsController
    .updateInundog({ _id: req.params.id }, req.body.inundog)
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
