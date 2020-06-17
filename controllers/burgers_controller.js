const express = require("express");
const router = express.Router();
const path = require("path");
// Importing the model burger file to use its database functions.
const burger = require("../model/burger");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});

router.get("/burgers", (req, res) => {
  burger.selectAll((data) => {
    res.json({ burgers: data });
  });
});

router.post("/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: 1
  }, condition, (data) => {
    res.redirect('/');
  });
});

router.delete("/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.deleteOne(condition, (result) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.json({ id: req.params.id});
    }
  });
});

module.exports = router;

// I had help using
//https://www.youtube.com/watch?reload=9&v=paNikhYqdz0
