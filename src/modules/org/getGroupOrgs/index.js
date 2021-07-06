const {
  mysql: { getFullDbSchema, getRowsWithPagination, buildQuery },
} = require("../../../utils");

const getGroupOrgs = async (groupId, pagination, query = {}, order = null) => {
  const dbConn = await getFullDbSchema();
  const where = { groupId, ...buildQuery(query) };
  const response = await getRowsWithPagination(
    dbConn.models.Org,
    pagination,
    where,
    order
  );
  return response;
};

module.exports = getGroupOrgs;
