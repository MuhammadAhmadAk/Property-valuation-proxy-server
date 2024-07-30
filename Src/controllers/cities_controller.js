const { fetchCities } = require("../Services/services");

exports.getCities = async (req, res) => {
  const { input, sessiontoken } = req.query;
  try {
    const cities = await fetchCities(input, sessiontoken);
    res.json(cities);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};
