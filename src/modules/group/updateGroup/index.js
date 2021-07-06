const {
  mysql: { getFullDbSchema, updateRow },
} = require("../../../utils");
const schema = require("./schema");

const updateGroup = async (input) => {
  const validatedInput = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await updateRow(dbConn.models.Group, validatedInput);
  return response;
};

module.exports = updateGroup;
