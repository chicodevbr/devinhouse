const Services = require('../service');

exports.updateList = async (req, res) => {
  const { list } = req.body;

  const obj = list.split(',');

  try {
    const newList = await Services.updateList(obj);
    res.json(newList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
