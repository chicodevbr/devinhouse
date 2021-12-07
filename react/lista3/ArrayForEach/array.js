let frutas = ['banana', 'morango', 'maçã', 'uva', 'pera'];

//frutas.forEach((fruta, index) => console.log(index, fruta));

//array
// multiplicar array[1] por array[0], array[2] por arrary[1]

const arr = [2, 4, 6, 8];
// let result = [];

const result = arr.map((element, index) => {
  if (index === 0) {
    return element;
  } else {
    return element * arr[index - 1];
  }
});

console.log(result); // saída [2, 8, 24, 48];
