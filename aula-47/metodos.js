let pessoa = {
    nome: 'Gabriel',
    idade: '20',
    dizerOla() {
        console.log(`Olá ` + this.nome)
    }
}

pessoa.dizerOla()