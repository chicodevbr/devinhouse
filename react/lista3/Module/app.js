import { user } from './user';
import { registraElemento, montaConteudo } from './function';

let elementoRaiz = document.getElementById('root');
const conteudo = montaConteudo(user);

registraElemento(elementoRaiz, conteudo);
