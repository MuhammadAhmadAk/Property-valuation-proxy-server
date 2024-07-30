const axios = require("axios");
const { googlePlacesApiKey } = require("../config/config");

exports.fetchProvinces = async (input, sessiontoken) => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:om&types=administrative_area_level_1&key=${googlePlacesApiKey}&sessiontoken=${sessiontoken}`;
  const response = await axios.get(url);
  return response.data.predictions.map((prediction) => {
    let description = prediction.description;
    const parts = description.split(", ");
    if (parts[parts.length - 1].toLowerCase() === "oman") {
      parts.pop();
    }
    return {
      ...prediction,
      description: parts.join(", "),
    };
  });
};

exports.fetchCities = async (input, sessiontoken) => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:om&types=locality&key=${googlePlacesApiKey}&sessiontoken=${sessiontoken}`;
  const response = await axios.get(url);
  console.log(response);
  return response.data.predictions.map((prediction) => {
    let description = prediction.description;
    const parts = description.split(", ");
    if (parts[parts.length - 1].toLowerCase() === "oman") {
      parts.pop();
    }
    return {
      ...prediction,
      description: parts.join(","),
    };
  });
};
