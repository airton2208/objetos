//const professor = {
   // nome: 'senac',
  //  idade: 28,
 //   email: 'senac@senac.com' ,
//}
//console.log(professor.nome, professor.idade)


//const bicicleta = {
    //cor : 'azul',
    //marchas: 21 ,
    //estilo: 'speed'
    
//}
//console.log(bicicleta["estilo"], bicicleta['marchas'])

//const filme = {

    //nome : 'cidade de Deus' ,
    //ano : 2002,
    //elenco: 'zé piqueno , cenoura , zé galinha',
    //visualizado: "N"
//}
//console.log(filme.nome,filme.elenco)

//const pessoa = {
   // nome : 'kerollen',
  //  idadede : 23,
   // genero : 'feminino',
   // musica : 'baby' ,
//}
//console.log(`o nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito da musica ${pessoa.musica `)

//const professores = [
    //{nome: 'andrey',modulo: 1},
    //{nome: 'fernando', modulo: 2},

//]
//console.log(professores);
//console.log(professores[1]);
//console.log(professores[1].nome);
 //
 //criar objetos
//const curso = {
   // nome: "frontend"//string

//}
//curso.numeroEstudantes = 50; // adicionar novo atributo para nosso objeto

//console.log(curso.numeroEstudantes)//frontend
// adicione uma lista com o personagem do filme 1
//
//const novoFilme = {
    //presidende: "alessandro barcelos",
    ///treinador: "mano meneses",
   // nome: "Campeão da libertadores 2023",
    //ano: 2023,
    //elenco: ['jonh','mecado','vitao','ph','wanderson' ],
    //elenco: [ {ator: 'jonh', personagem: 'homen aranha'},
   // {ator:'mecado', personagem: 'capitão america'},
   // {ator:'vitao', personagem: 'thor'},
  //{ator: 'ph', personagem: 'pantera negra'},
  // {ator: 'wanderson', personagem: 'homem de ferro' },
//]

    //visualizado: "N"
  
//}
//novoFilme.personagens = ['homen aranha','capitao america','thor','pantera negra','homen de ferro'];  // tarefa1
//console.log(novoFilme.elenco[0], 'como ', novoFilme.personagens[0]); //tarefa 2
//let carros = [ 'monza', 'corsa','belina']
//carros [0]= 'marea'
//console.log('/n/n');
//console.log(...)

//const usuariO= {
    /// nome: 'senac',
  //idade: 28,}
  //Usuario(usuarioTeste)
  // email: 'senac@senac.com' ,
   //cidade:'são paulo',
 //  marcas: ['dell', 'lg', 'nokia']
 //}
 //const usuarioNovo = {
  //  ...usuario,
   // nome: 'Abel'
 //}
 //console.log(usuarioNovo.nome)
 //const usuarioTeste = {
   // nome: 'senac',
 //idade: 28,}
// novoUsuario(usuarioTeste)

 //function novousuario(pessoa){
    //alert(pessoa);
    //const pessoaNova = {
        //...pessoa,
        //comidas: ['alface','beterraba'],
       // amigo: {nome: 'roberto', idade: 50},

   // }
    //console.log('o nome da pessoa é ')
   // return pessoaNova;

// }
// let teste = novoUsuario(ususarioteste);
// console.log('o nome da pessoa é $ {teste.nome}) e suas comidas preferidas são ${teste.comidas[0]} e ${teste.comidas[1]}');

//let pais = 'croacia';
//switch (pais) {
    //case 'brasil':
     //    console.log('brasileiro');
      //  break; 
    //case 'lichtein':
      //  console.log('lichteinense');
       /// return 'nacionalidade não encontrada';
      //  break;
       // case 'croacia':
       //     console.log ('croata')
         //   break;
          //  default
          //  console.log('nacionalidade não encontrada');
           /// break;
//}


//let algorismo1 = Number (prompt('Numero 1:'));
//let algorismo2 = Number (prompt('Numero 2:'));

//let opcao = Number (prompt("digite uma opcao:/n1- Soma/n2-subtração/n3- Multiplicação/n4- Divisão"));

//switch(opcao) {
   // case 1:
   //     let soma = algorismo1 + algorismo2;
     //   console.log (soma);
    //    break;
   // default:
    ///    console.log('opção não encontrada');
    //    break;
//}
//function somaNumeros() {
 /// let valor = 100;
 // let soma = 0
  //while( valor !== 0) {
   //  valor = Number(prompt("digite um numero: /n"))
   // soma += valor;

 // }
 // return soma;
//}
//console.log(somaNumeros());

//Escreva uma função que receba um array com números e devolva qual o maior dentro dele

//Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O maior número é 18"



///const numeros = [23,65,73,44];function maiorNumero(numeros){
//let maior = 0;
  //for(let i = 0; i < numeros.length; i++){
   // if(numeros[i] > maior){
   //   maior = numeros[i];
   // }
 // }
 // return maior;
//}
//console.log(numeros)
//console.log(maiorNumero(numeros))


//objeto de ususarios
const users = {
  nome: '',
  usuario: '',
  senha: '',
  logado: false,

}
// ARRAY DE OBJEETOS DOS USUARIOS
let usersArray = [];


function startApp() {
  let opcao = 233;

  while(opcao !== 0){
    let result;

     switch(opcao){
      case 1:
        result = login();
        if(result){
          menu();
        } else {
          alert('usuario ou senha incoretos')
        }
        break;
        case 2: 
        result = register();
        if (!result) {
        alert('não foi possivel fazer o cadastro!')
        } else {
          alert( 'opa, usuario cadastrado copm sucesso ! 👍agora é só acessar ...');
        }
        

        break;
        case 233:
          alert("você precisa estar logado "+ "para acessar o menu principal! \n\n"
           +"caso ainda não tenha usuario " +"cadastrado, utilize a opcao 2 do menu" + " e faça o seu registro!");
           break;
        default:
          alert('opcao não encontrada!')
          break;
     }

     opcao = Number(   
      prompt(
        "selecione a opcao desejada:\n" +
        "1 - Entrar\n" + 
        "2 - Cadastrar usuario\n" +
        "3 - Esqueci minhas credencias\n" +
        "0 - Sair"    
        )
     )
  }

}

function login(){
  let user = prompt ("seu usuario:");
  let password = prompt("sua senha: ");

  return validatelogin(user, password);
}
function validatelogin(user, password){
  let result = false 
  for(let i = 1; i < usersArray.length; i++){
    console.log(usersArray[i]);
    if(usersArray[i].usuario === user && usersArray[i].senha === password){
    result = true
    usersArray[i].logado = true;
  }
  return result;
}
}


function register(){

  let result = false;

  users.nome = prompt ("Nome: ");
  users.usuario = prompt ("Usuario: ");
  users.senha = prompt ("Senha: ");

  if(users.nome !== ''&& users.senha !== ''){
    usersArray.push(users);
    result = true 

  } 
  return result;
}


// inicia o sistema 
startApp();
