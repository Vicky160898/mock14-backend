require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./config/db");
const UserModel = require("./controller/gamer");
const User = require("./controller/random");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

app.use("/gamer", UserModel);
app.use("/random", User);

app.listen(PORT, async (req, res) => {
  await connect();
  console.log("server started on 8080");
});
