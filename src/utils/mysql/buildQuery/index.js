const {
  Op: { like },
} = require("sequelize");
const { mergeAll } = require("ramda");

const buildQuery = (query = {}) => ({
  ...mergeAll(
    Object.keys(query).map((key) => ({
      [key]: {
        [like]: `%${query[key]}%`,
      },
    }))
  ),
});

module.exports = buildQuery;
