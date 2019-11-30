class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdimin() {
        return this.admin == true
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha)

        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdimin())
console.log(Adm1.isAdimin())