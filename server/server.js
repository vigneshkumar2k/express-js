const express = require("express");
const dotenv=require("dotenv")

const cors = require("cors");
const weatherRoutess = require("./controllers/weatherControllers");

 dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/weather', weatherRoutess);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in mode on port ${PORT}`)
);
