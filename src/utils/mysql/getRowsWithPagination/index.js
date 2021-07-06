const getRowsWithPagination = async (model, { take, skip }, where, order) => {
  const response = await model.findAndCountAll({
    where,
    order,
    limit: take,
    offset: skip,
  });
  const result = {
    data: response.rows,
    pagination: { take, skip, total: response.count },
  };
  return result;
};

module.exports = getRowsWithPagination;
