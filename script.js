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
const novoFilme = {
    presidende: "alessandro barcelos",
    treinador: "mano meneses",
    nome: "Campeão da libertadores 2023",
    ano: 2023,
    //elenco: ['jonh','mecado','vitao','ph','wanderson' ],
    elenco: [ {ator: 'jonh', personagem: 'homen aranha'},
    {ator:'mecado', personagem: 'capitão america'},
    {ator:'vitao', personagem: 'thor'},
  {ator: 'ph', personagem: 'pantera negra'},
   {ator: 'wanderson', personagem: 'homem de ferro' },
]

    //visualizado: "N"
  
}
novoFilme.personagens = ['homen aranha','capitao america','thor','pantera negra','homen de ferro'];  // tarefa1
console.log(novoFilme.elenco[0], 'como ', novoFilme.personagens[0]); //tarefa 2
