const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tour name cannot be empty"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Tour must have a price"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model("Tour", tourSchema)

module.exports = Tour
