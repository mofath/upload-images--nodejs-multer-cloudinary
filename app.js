const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userModel = require("./models/user-model");
const 

mongoose
  .connect(
    "mongodb+srv://mhmd:mofath20@cluster0.73rpk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => console.log());

app.use(express.static("images"));

app.listen(5000, () => console.log("Server is listening on port 5000"));
