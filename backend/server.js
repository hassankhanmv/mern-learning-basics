require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const products = require("./routes/products");

// express
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method, req.url);
  next();
});

// routes
app.use("/api/products", products);

// PORT
const port = process.env.PORT || 5000;
// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    app.listen(port, () => {
      console.log(
        `Connected to Database and Server is running on port ${port}`
      );
    });
  })
  .catch((err) => console.log(err, "err from DB"));
