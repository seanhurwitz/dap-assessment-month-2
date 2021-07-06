const yup = require("yup");

const schema = yup.object({
  groupId: yup.string().required(),
  name: yup.string().required(),
});

module.exports = schema;
