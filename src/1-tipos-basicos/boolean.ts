let isActive: boolean;

isActive = true;

function mapearStatusDeUsuario(status: boolean) {
    if(status) {
        return 'Usuário está ativo'
    } else {
        return 'Usuário não está ativo';
    }
}

mapearStatusDeUsuario(isActive)
