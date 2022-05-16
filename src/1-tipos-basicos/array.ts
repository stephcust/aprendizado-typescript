const gatos: string[] = ['lora', 'logan']

gatos.push('lena');

function exibeGatos(gatos: string[]) {
    return `Os gatos são ${gatos.join(', ')}`;
}

console.log(exibeGatos(gatos))