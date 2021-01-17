const express = require("express");
const config = require("config");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./roters/auth_user"));
app.use(cors);
app.use(morgan("dev"));

const PORT = process.env.PORT || config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
