let frutas = ['banana', 'morango', 'maçã', 'uva', 'pera'];

frutas.forEach((fruta, index) => console.log(index, fruta));

let arr = [2, 4, 6, 8];

let arr1 = [];
arr.map((number, index) => {
  arr1.push(number);

  console.log(number);
});
