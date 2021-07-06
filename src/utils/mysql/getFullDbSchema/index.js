const { DataTypes } = require("sequelize");
const getDbConnectionWithDb = require("../getDbConnectionWithDb");

const getFullDbSchema = async (bootstrap = false) => {
  const dbConn = await getDbConnectionWithDb(bootstrap);

  dbConn.define("Group", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  dbConn.define("Org", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  dbConn.define("Site", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  await dbConn.sync({ alter: true });
  return dbConn;
};

module.exports = getFullDbSchema;
