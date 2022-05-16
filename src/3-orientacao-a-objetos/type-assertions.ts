//Type assertions
interface JogoAssertion {
    nome: string;
    descricao: string
}

// let jogo = {}; -> define um objeto vazio ao tipo do objeto jogo
// jogo.nome = 'askakmnad'

let jogo = {} as JogoAssertion;
//ou
//let jogo = <JogoAssertion>{}
jogo.nome = 'League of Legends';
jogo.descricao = 'descricao do jogo LOL'