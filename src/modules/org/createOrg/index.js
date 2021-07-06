const {
  mysql: { getFullDbSchema, createRow },
} = require("../../../utils");
const schema = require("./schema");

const createOrg = async (input) => {
  const validatedInput = await schema.validate(input);
  const dbConn = await getFullDbSchema();
  const response = await createRow(dbConn.models.Org, validatedInput);
  return response;
};

module.exports = createOrg;
