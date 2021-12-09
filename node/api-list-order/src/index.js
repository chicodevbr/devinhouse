const express = require('express');
const cors = require('cors');

const app = express();
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const indexRouter = require('./server/routes/index');

app.use('/', indexRouter);
//app.use('/list', listRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
