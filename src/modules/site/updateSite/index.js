const {
  mysql: { getFullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateSite = async (input) => {
  const validatedInput = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await updateRow(dbConn.models.Site, validatedInput);
  return response;
};

module.exports = updateSite;
