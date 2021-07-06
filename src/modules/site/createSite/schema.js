const yup = require("yup");
const locationSchema = require("../schema");

const schema = yup.object({
  orgId: yup.string().required(),
  name: yup.string().required(),
  location: locationSchema.required(),
});

module.exports = schema;
