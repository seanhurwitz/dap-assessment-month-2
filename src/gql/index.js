const fs = require("fs");
const { join } = require("path");
const { omit } = require("lodash");

const allDirectories = fs
  .readdirSync(__dirname, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name);

let gqls = ["", "", "type Query {", "type Mutation {"];
let gqlPaths = ["schema.gql", "input.gql", "query.gql", "mutation.gql"];

const cleanseData = (data = "") => {
  data = data.replace("type Query {", "");
  data = data.replace("type Mutation {", "");
  data = data.replace("}", "");
  return data;
};

const resolvers = {
  Query: {},
  Mutation: {},
};

allDirectories.forEach((dir) => {
  gqlPaths.forEach((gqlPath, idx) => {
    const schemaPath = join(__dirname, dir, "schema", gqlPath);
    if (fs.existsSync(schemaPath)) {
      const data = fs.readFileSync(schemaPath).toString();
      gqls[idx] += idx <= 1 ? data : cleanseData(data);
    }
  });

  const resolverPath = join(__dirname, dir, "resolvers.js");
  if (fs.existsSync(resolverPath)) {
    const dirResolvers = require(resolverPath);
    resolvers.Query = {
      ...resolvers.Query,
      ...(dirResolvers.Query || {}),
    };
    resolvers.Mutation = {
      ...resolvers.Mutation,
      ...(dirResolvers.Mutation || {}),
    };
    Object.keys(omit(dirResolvers, ["Query", "Mutation"])).forEach((key) => {
      resolvers[key] = dirResolvers[key];
    });
  }
});

gqls[2] += "}";
gqls[3] += "}";

const typeDefs = gqls.join("\n");

module.exports = { typeDefs, resolvers };
