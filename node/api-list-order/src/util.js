const fs = require('fs');

function createFolder(folderName) {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    return `${folderName} criado com sucesso`;
  }

  return `${folderName} não foi possível criar.`;
}

function compareArrays(a1, a2) {
  return (
    a1.length === a2.length && a1.every((value, index) => value === a2[index])
  );
}

function getData() {
  const result = JSON.parse(fs.readFileSync('src/db/' + 'user.json', 'utf8'));
  return result;
}

module.exports = {
  createFolder,
  compareArrays,
  getData,
};
