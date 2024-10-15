import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/crudapp");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

export const userModel = mongoose.model("user", userSchema);
