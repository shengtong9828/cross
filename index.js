const { APP_PORT } = require("./src/config/config.default.js");

const app = require("./src/app/index.js");

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
