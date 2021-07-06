const { org, group, site } = require("../../modules");

module.exports = {
  Query: {
    getOrg: (_, { id }) => org.getOrg(id),
  },
  Mutation: {
    createOrg: (_, { input }) => org.createOrg(input),
    updateOrg: (_, { input }) => org.updateOrg(input),
  },
  Org: {
    group: (o) => group.getGroup(o.groupId),
    sites: (o, { pagination, query, order }) =>
      site.getOrgSites(o.id, pagination, query, order),
  },
};
