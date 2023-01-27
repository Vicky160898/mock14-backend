const express = require("express");
const app = express.Router();

const characters = "abcdefghijklmnopqrstuvwxyz";
const randomWords = (length) => {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.get("/", (req, res) => {
  let randomInt = Math.random() * (5 - 3) + 3;
  let word = randomWords(randomInt);
  if (word) {
    res.send(word);
  } else {
    res.send("Word not generated");
  }
});

module.exports = app;
