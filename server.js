const app = require("./Src/app");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
