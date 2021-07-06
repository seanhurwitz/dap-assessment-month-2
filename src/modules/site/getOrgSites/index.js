const {
  mysql: { getFullDbSchema, getRowsWithPagination, buildQuery },
} = require("../../../utils");

const getOrgSites = async (orgId, pagination, query = {}, order = null) => {
  const dbConn = await getFullDbSchema();
  const where = { orgId, ...buildQuery(query) };
  const response = await getRowsWithPagination(
    dbConn.models.Site,
    pagination,
    where,
    order
  );
  return response;
};

module.exports = getOrgSites;
