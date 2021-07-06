const yup = require("yup");

module.exports = yup.array().of(
  yup.object({
    lat: yup.number().required(),
    lng: yup.number().required(),
  })
);
