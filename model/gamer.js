const { Schema, model } = require("mongoose");

const GamerSchema = new Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const GamerModel = new model("game", GamerSchema);

module.exports = GamerModel;
