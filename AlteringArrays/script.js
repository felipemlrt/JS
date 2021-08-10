function cadastrar_funcionarios(){
     var funcionarios = [];
     while(true){
         aux = prompt("Digite o nome do proximo funcionario ou 0 para sair");
         if(aux == 0)
             break;
         else
             funcionarios.unshift(aux);
     }

     for (i in funcionarios){
         document.write("<br>o nome é: ", funcionarios[i]);
     }
}

cadastrar_funcionarios()
