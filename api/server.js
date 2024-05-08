const express = require("express");
const cors = require("cors");
const next = require("next");

require("dotenv").config();

const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  app.use("/api", routes);

  app.get("/api", (req, res) => {
    res.send(`<h1>Welcome to Inundogs</h1>`);
  });

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
  });
});
