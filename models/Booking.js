const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  itemId: [
    {
      _id: {
        type: ObjectId,
        ref: "Item",
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      night: {
        type: Number,
        required: true,
      },
    },
  ],
  memberId: [
    {
      _id: {
        type: ObjectId,
        ref: "Member",
        required: true,
      },
    },
  ],
  bankId: [
    {
      _id: {
        type: ObjectId,
        ref: "Member",
        required: true,
      },
    },
  ],
  proofPayment: {
    type: String,
    required: true,
  },
  bankFrom: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
