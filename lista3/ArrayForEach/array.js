let frutas = ['banana', 'morango', 'maçã', 'uva', 'pera'];

//frutas.forEach((fruta, index) => console.log(index, fruta));

//array
// multiplicar array[1] por array[0], array[2] por arrary[1]

let arr = [2, 4, 6, 8];
let result = [];

arr.map((element, index) => {
  if (index === 0) {
    return element;
  } else {
    result.push(element * arr[index - 1]);
    return result;
  }
});

console.log(result); // saída [2, 8, 24, 48];
