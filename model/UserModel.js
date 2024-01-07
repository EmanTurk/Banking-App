import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Your Name"],
  },
  cash: {
    type: Number,
    min: 0,
  },
  credit: {
    type: Number,
    min: 0,
  },
  email: {
    type: String,
    required: [true, "Please Provide A Valide Email"],
    unique: [true, "Email In Use"],
  },
  totalCashFlow: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
  },
  isAdmin: {
    type: Boolean,
  },
  password: {
    type: String,
  },
});

const Model_User = mongoose.model("User", userSchema);

export default Model_User;