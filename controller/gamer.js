const GamerModel = require("../model/gamer");
const express = require("express");
const app = express.Router();

app.post("/user", async (req, res) => {
  const { name, level } = req.body;
  try {
    let gamer = new GamerModel({
      name: name,
      level: level,
    });
    await gamer.save();
    return res.status(200).send(gamer);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});



module.exports = app;
