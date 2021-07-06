const {
  mysql: { getFullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateOrg = async (input) => {
  const validatedInput = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await updateRow(dbConn.models.Org, validatedInput);
  return response;
};

module.exports = updateOrg;
