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

exports.getDate = async (req, res) => {
  const { month } = req.body;

  if (month > 12 || month < 0) {
    res.status(500).json({ message: 'Escolha um número de mês correto' });
  }

  let days = [...Array(31).keys()];

  const calendar = days.map((item) => {
    return `${item + 1}/${month}/2021`;
  });

  console.log(calendar);

  res.json(calendar);
};
