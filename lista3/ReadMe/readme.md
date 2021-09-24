# JavaScript



## let 

é usado para declarar uma variável local no escopo do bloco atual. O let pode se modificar e ter novos valores atribuídos.

Exemplo: 

```javascript
let variavel = 23;

let str = "casa";

let valor = true;

let valor = false;
```

## 

### const 

semelhante ao let é uma forma de armazenar dados na memória, ou seja, declarar uma variável, porém, ao contrário do let, o const não pode ser modificado e nem pode ser redeclarada. Constantes possuem escopo de bloco.

 Exemplo: 

```javascript
const carro = 'azul';

const numero = 10;

const arr = [1, 4, 7, 11];
```



### Classes

Foram introduzidas ao JavaScript no ECMAScript 2015 e são simplicações da linguagem para as heranças baseadas nos protótipos. 

Classes são 'funções especiais'



```javascript
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}
```



### Atributos 

Os atributos são valores que contêm informações adicionais sobre elementos do HTML.