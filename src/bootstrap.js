const {
  mysql: { getFullDbSchema },
} = require("./utils");

getFullDbSchema(true).then(() => {
  console.log("bootstrapped!");
});
