const { fetchProvinces } = require("../Services/services");

exports.getProvinces = async (req, res) => {
  const { input, sessiontoken } = req.query;
  try {
    const provinces = await fetchProvinces(input, sessiontoken);
    res.json(provinces);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};
