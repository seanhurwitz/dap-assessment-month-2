const {
  mysql: { getFullDbSchema, getRow },
} = require("../../../utils");

const getGroup = async (id) => {
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Group, id);
  return response;
};

module.exports = getGroup;
