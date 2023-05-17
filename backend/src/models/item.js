const mongoose = require("mongoose");

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = (email) => {
  return regex.test(email);
};

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please enter your name",
      maxlength: 5,
    },
    email: {
      type: String,
      trim: true,
      // unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
    },
    mobile: {
      type: Number,
      trim: true,
      // unique: true,
      required: "Mobile number is required",
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
