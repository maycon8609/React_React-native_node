// 3.1
console.log(' 3.1 map ')
const arr = [1, 2, 3, 4, 5];

const map = arr.map(item => item + 10);
console.log(map)

// 3.2
// Dica: Utilize uma constante pra function
console.log(' 3.2 ')
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade
console.log(mostraIdade(usuario))

// 3.3
// Dica: Utilize uma constante pra function
console.log(' 3.3 ')
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome, idade) => ({ nome, idade })
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

// 3.4
console.log(' 3.4 ')
const promise = () => new Promise((resolve, reject) => resolve())
console.log(promise)