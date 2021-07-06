const yup = require("yup");
const locationSchema = require("../schema");

const schema = yup.object({
  id: yup.string().required(),
  name: yup.string().optional(),
  location: locationSchema.optional(),
});

module.exports = schema;
