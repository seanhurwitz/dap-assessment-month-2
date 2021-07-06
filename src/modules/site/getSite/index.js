const {
  mysql: { getFullDbSchema, getRow },
} = require("../../../utils");

const getSite = async (id) => {
  const dbConn = await getFullDbSchema();
  const response = await getRow(dbConn.models.Site, id);
  return response;
};

module.exports = getSite;
