const express = require("express");
const cors = require("cors");
require("dotenv").config();

const provincesRoutes = require("../Src/routes/province.routes");
const citiesRoutes = require("../Src/routes/cities.routes");

const app = express();

app.use(cors());
app.use("/api", provincesRoutes);
app.use("/api", citiesRoutes);

module.exports = app;
