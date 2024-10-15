import dotenv from "dotenv";
import express from "express";
import path from "path";
import { userModel } from "./models/user.js"; // Corrected import

const app = express();

//to initialise .env file
dotenv.config();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public"))); // Use 'process.cwd()' for ES modules

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let allUser = await userModel.find();
  res.render("read", { users: allUser });
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;

  let createdUser = await userModel.create({
    name: name,
    email: email,
    image: image,
  });
  res.redirect("/read");
});

// read the user you want to edit
app.get("/edit/:id", async (req, res) => {
  let editUser = await userModel.findById(req.params.id);
  res.render("edit", { editUser });
});

// edit the user you reading
app.post("/edit/:id", async (req, res) => {
  let { name, email, image } = req.body;
  let editUser = await userModel.findOneAndUpdate(
    { _id: req.params.id }, // Match the user by ID
    { name, email, image }, // The new data from the form
    { new: true } // Return the updated document
  );
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
