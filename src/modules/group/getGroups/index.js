const {
  mysql: { getFullDbSchema, getRowsWithPagination, buildQuery },
} = require("../../../utils");

const getGroups = async (pagination, query = {}, order = null) => {
  const dbConn = await getFullDbSchema();
  const where = buildQuery(query);
  const response = await getRowsWithPagination(
    dbConn.models.Group,
    pagination,
    where,
    order
  );
  return response;
};

module.exports = getGroups;
