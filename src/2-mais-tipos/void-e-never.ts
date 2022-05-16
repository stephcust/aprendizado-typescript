function principal(): void {
    console.log('executando')
}

principal()

//Never -> laços de repetição infinito 
// ou funções que disparam erros
function neverFunc(): never {
    throw new Error('ola')
}

neverFunc()