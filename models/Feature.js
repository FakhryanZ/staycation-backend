const mongoose = require("mongoose");

const featureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Feature", featureSchema);
