const {
  mysql: { getFullDbSchema, getRow },
} = require("../../../utils");

const getOrg = async (id) => {
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Org, id);
  return response;
};

module.exports = getOrg;
