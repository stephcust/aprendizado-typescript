class Usuario {
    public nome;
    public idade;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}
class Player extends Usuario {
    public jogo;

    constructor(nome: string, idade: number, jogo: string) {
        super(nome, idade);

        this.jogo = jogo;
    }

    dizerJogoAtual() {
        return `Estou jogando no momento ${this.jogo}`
    }

    static queHorasSao() {
        return Date();
    }
}

const jogador = new Player('Anna', 25, 'COD');
console.log(jogador.dizerJogoAtual());
console.log(Player.queHorasSao())

class Jogo {
    protected nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizerNome() {
        return `O jogo é: ${this.nome}`
    }
}

// class JogoComDescricao extends Jogo {
//     private descricao;
    
//     constructor(nome: string, descricao: string) {
//         super(nome);

//         this.descricao = descricao;
//     }

//     dizerNomeComDescricao() {
//         return `O nome do jogo é ${this.nome}`
//     }
// }

const ghost = new Jogo('Ghost of Tsushima');
console.log(ghost.dizerNome);

//const ghostComDescricao = new JogoComDescricao('Ghost of Tsushima', 'é um jogo muito legal!');

//Interfaces 
interface IJogoComDescricao {
    //nome: string
    descricao: string;
    dizerNomeComDescricao(): string;
}
// ----------------------------------> implements
// class JogoComDescricao extends Jogo implements IJogoComDescricao{
//     public descricao;
    
//     constructor(nome: string, descricao: string) {
//         super(nome);

//         this.descricao = descricao;
//     }

//     dizerNomeComDescricao() {
//         return `O nome do jogo é ${this.nome}`
//     }
// }

//interface funciona exatamente como type alias:
// type IJogoComDescricao = {
//     descricao: string,
//     dizerNomeComDescricao(): string
// }
const obj: IJogoComDescricao = {
    descricao: 'descricao do jogo',
    dizerNomeComDescricao() {
        return '123';
    }
}
