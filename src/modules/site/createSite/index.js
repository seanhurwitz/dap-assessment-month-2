const {
  mysql: { getFullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createSite = async (input) => {
  const validatedInput = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await createRow(dbConn.models.Site, validatedInput);
  return response;
};

module.exports = createSite;
