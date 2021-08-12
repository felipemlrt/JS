class Pessoa{
    nome;
    email;
    idade;
    constructor(nome_construtor, email_construtor, idade_construtor){
        this.nome = nome_construtor;
        //construtor armazena dado "felipe" no objeto parte5
        this.email = email_construtor;
        this.idade = idade_construtor;
    }
    mostrar_dados(){
        return this.nome+" "+this.email+" "+this.idade
        //funcao retorna "felipe" parte 7
    }
}

function enviar_dados(){
    var nome_input = document.getElementById("aaa").value
    //receber o dado "felipe" parte 3
    var email_input = document.getElementById("bbb").value
    var idade_input = document.getElementById("ccc").value
    var pessoa_1 = new Pessoa(nome_input, email_input, idade_input);
    //dado "felipe" passado para o construtor parte 4
    //-------------------------------------
    document.write(pessoa_1.mostrar_dados())
    //funcao mostrar dados chamada parte 6
    //document write mostra o dado "felipe" parte 8
}
