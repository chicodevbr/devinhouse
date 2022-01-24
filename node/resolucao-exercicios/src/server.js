const express = require('express');

const app = express();
const fs = require('fs');

app.use(express.json());

app.patch('/changePosition/:name', (req, res) => {
  if (fs.lstatSync('src/' + 'user.json').isFile()) {
    const { name } = req.params;
    const users = JSON.parse(fs.readFileSync('src/' + 'user.json', 'utf-8'));
    const findUser = users.find((user) => user.name === name);

    if (!findUser) {
      return res
        .status(400)
        .send({ message: 'Não existe uma pessoa com esse nome' });
    }

    const [firstUser] = users;

    const reOrderUsers = users.map((item) => {
      if (item.id === findUser.id) {
        return firstUser;
      }
      if (item.id === firstUser.id) {
        return findUser;
      }
      return { ...item };
    });

    return res.status(200).send({ users: users });
  }
});

app.get('/getDays/:month', (req, res) => {
  const { month } = req.params;
  const numberMonth = Number(month);

  if (numberMonth > 12 || numberMonth < 1) {
    return res.status(400).send({ message: 'Mês inválido' });
  }

  const onlyDaysWeek = [];
  const year = new Date().getFullYear();
  const firstDayOfMonth = new Date(year, numberMonth - 1, 1);

  while (firstDayOfMonth.getMonth() + 1 === numberMonth) {
    if (firstDayOfMonth.getDay() > 0 && firstDayOfMonth.getDay() < 6) {
      onlyDaysWeek.push(
        new Date(
          year,
          numberMonth - 1,
          firstDayOfMonth.getDate()
        ).toLocaleDateString()
      );
    }
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
  }

  return res.status(200).send({ days: onlyDaysWeek });
});

app.get('/filter', (req, res) => {
  if (fs.lstatSync('src/' + 'user.json').isFile()) {
    const users = JSON.parse(fs.readFileSync('src/' + 'user.json', 'utf-8'));

    const { job, state, ageMin, ageMax } = req.query;

    if (ageMin && ageMax && ageMax < ageMin) {
      return res
        .status(400)
        .send({ message: 'O ageMax não pode ser menor que o ageMin' });
    }
    let filterUsers = users;

    if (ageMin || ageMax) {
      filterUsers = filterUsers.filter((user) => {
        const existAgeMax = ageMax ? user.age <= ageMax : user.age >= ageMin;
        const existAgeMin = ageMin ? user.age >= ageMin : user.age <= ageMax;

        return existAgeMax && existAgeMin;
      });
    }

    if (state) {
      filterUsers = filterUsers.filter((user) => user.state === state);
    }

    if (job) {
      filterUsers = filterUsers.filter((user) => user.job === job);
    }
    return res.status(200).send({ users: filterUsers });
  }
});

app.get('/factorial', (req, res) => {
  const numberTest = Number(req.query.number);

  if (!numberTest) {
    return res.status(400).send({ message: 'Somente pode enviar números' });
  }

  const listResult = [];
  Array(numberTest)
    .fill()
    .map((_, index) => {
      const newIndex = index + 1;
      if (index === 0) {
        listResult.push({
          number: newIndex,
        });
      } else {
        listResult.push({
          number: listResult[index - 1].number * newIndex,
        });
      }
    });

  const lastItemByPosition = listResult.pop();

  return res.status(200).send({ result: lastItemByPosition });
});

app.post('/convert', (req, res) => {
  const { item } = req.body;
  if (typeof item != 'string') {
    return res
      .status(400)
      .send({ message: 'Somente valores de texto são aceitos' });
  }

  const infoConvert = item
    .split('')
    .map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');

  return res.status(200).send({ message: infoConvert });
});

app.post('/createFile', (req, res) => {
  const { number } = req.body;

  if (!Number.isInteger(number) || number <= 0) {
    return res.status(400).send({
      message: 'Não pode enviar números decimais ou menor e/ou igual a zero',
    });
  }

  const result = [];
  Array(number)
    .fill()
    .map((_, index) => {
      result.push({ item: index + 1 });
    });

  fs.writeFileSync('src/numbers.json', JSON.stringify(result));

  return res.status(200).send({ result: result });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Running'));
