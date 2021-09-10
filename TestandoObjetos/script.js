class Pessoa{
    var nome;
    var email;
    var idade;
    constructor(nome_construtor, email_construtor, idade_construtor){
        this.nome = nome_construtor;
        this.email = email_construtor;
        this.idade = idade_construtor;
    }
    mostrar_dados(){
        return this.nome+" "+this.email+" "+this.idade
    }
}

function enviar_dados(){
    var nome_input = document.getElementById("input_nome").value
    var email_input = document.getElementById("bbb").value
    var idade_input = document.getElementById("ccc").value
    var pessoa_1 = new Pessoa(nome_input, email_input, idade_input);
    document.write(pessoa_1.mostrar_dados())
}
