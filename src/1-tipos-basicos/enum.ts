enum Permissoes {
    admin = 'ADMIN',
    editor = 'EDITOR',
    comum = 'COMUM'
}

const usuario = {
    nivel: Permissoes.admin
}

console.log(usuario) // retorna { nivel: 0 }


enum Cores {
    red = '#ff0000',
    black = '#000',
}
const cor = {
    corEscolhida: Cores.red
}

console.log(cor) // retorna { corEscolhida: '#ff0000' }