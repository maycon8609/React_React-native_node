const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuario => usuario.idade)
console.log(`${idades}`)

const filter = usuarios.filter(usuario => usuario.empresa == 'Rocketseat' && usuario.idade >= 18)
console.log(filter)

const google = usuarios.find(usuario => usuario.empresa == 'google')
console.log(google)

const calc = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50)
console.log(calc)