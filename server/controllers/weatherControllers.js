const axios = require("axios");

const weatherController = async (req, res) => {
  console.log("fsssd");
  try {
    const API_KEY =
      process.env.OPEN_API_KEY || `3f4c8efde8dfa7274ccb444191aa597f`;
    const { city } = req.body;
    console.log("city", city);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(url);
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = weatherController;
