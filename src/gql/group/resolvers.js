const { group, org } = require("../../modules");

module.exports = {
  Query: {
    getGroup: (_, { id }) => group.getGroup(id),
    getGroups: (_, { pagination, query, order }) =>
      group.getGroups(pagination, query, order),
  },
  Mutation: {
    createGroup: (_, { input }) => group.createGroup(input),
    updateGroup: (_, { input }) => group.updateGroup(input),
  },
  Group: {
    orgs: (g, { pagination, query, order }) =>
      org.getGroupOrgs(g.id, pagination, query, order),
  },
};
