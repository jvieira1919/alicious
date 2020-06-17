const express = require("express");
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(port, () => {
  console.log("Server listening on: http://localhost:" + port);
});
