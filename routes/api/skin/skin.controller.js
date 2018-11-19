const query = require("../common/query");

exports.saveSkinType = async (req, res) => {
  const { sex, age, type } = req.body;
  try {
    let result = await query.getRecommendation(sex, age, type);
    return res.status(200).json({
      result
    })
  } catch(err) {
    return res.status(406).json({
      err
    })
  }
};