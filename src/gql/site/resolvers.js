const { site, org } = require("../../modules");

module.exports = {
  Query: {
    getSite: (_, { id }) => site.getSite(id),
  },
  Mutation: {
    createSite: (_, { input }) => site.createSite(input),
    updateSite: (_, { input }) => site.updateSite(input),
  },
  Site: {
    org: (s) => org.getOrg(s.orgId),
  },
};
