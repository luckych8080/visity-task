const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./routes/item");
const PORT = 8080;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(router);

const URL = "mongodb://127.0.0.1:27017/interassignmentitems1";

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    throw error;
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
