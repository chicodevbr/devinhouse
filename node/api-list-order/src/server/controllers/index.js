const { query } = require('express');
const { getData, createOrUpdateFolderAndData } = require('../../util');
const Services = require('../service');
const fs = require('fs');

exports.index = async (req, res) => {
  console.log('API version 1.0.0');
  res.send('Welcome to our api.');
};

exports.getUsers = async (req, res) => {
  const user = getData();

  return res.status(200).json({ users: user });
};

exports.getUsersById = async (req, res) => {
  const { id } = req.params;
  const users = getData();
  const isExistUser = users.filter((item) => item.id === Number(id));
  const [user] = isExistUser;
  if (!user) {
    return res.status(200).send({ message: 'Usuário não encontrado' });
  }

  return res.status(200).send({ user: user });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, job, state } = req.body;
  const users = getData();

  const isExistUser = users.filter((item) => item.id === Number(id));
  const [user] = isExistUser;
  if (!user) {
    return res.status(200).send({ message: 'Usuário não encontrado' });
  }

  const findOptionsForUpdate = Object.keys(req.body).map((item) => {
    return {
      [item]: req.body[item],
    };
  });

  const updateUsersList = users.map((item) => {
    if (item.id === Number(id)) {
      return { ...findOptionsForUpdate };
    } else {
      return { ...item };
    }
  });

  return res.status(200).send({ updateUsersList });
};

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

exports.createAndSaveFolder = async (req, res) => {
  const { data, folder } = req.body;

  createOrUpdateFolderAndData(data, folder);
  res.status(201).json({ message: 'Arquivo salvo com sucesso' });
};

exports.getFilter = async (req, res) => {
  const { job, state, ageMin, ageMax } = req.query;
  const existKey = Object.keys(req.query).filter((item) => {
    if (req.query[item]) return { [item]: req.query[item] };
  });

  const filterKeys = existKey.filter((item) => item);

  console.log(filterKeys);

  if (fs.lstatSync('src/db/' + 'user.json').isFile()) {
    const users = JSON.parse(fs.readFileSync('src/db/' + 'user.json', 'utf8'));
    const filterUsers = users.filter((item) => {
      if (item.age <= ageMax && item.age >= ageMin) {
        return item;
      }
    });
    const firstLogic = users.filter((item) => item.age <= ageMax);

    if (ageMax >= users.filter((item) => item))
      return res.status(201).json({ users: filterUsers });
  }
  fs.writeFileSync('src/db/' + 'user.json', JSON.stringify(req.body));
  return res.status(201).JSON({ message: 'Hello world' });
};
