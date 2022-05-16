//Type Alias
type User = {
    name: string;
    lastName: string;
    age?: number; // propriedade se torna opcional com '?'
    birthday: string;
}

const steph: User = {
    name: 'stepheson',
    lastName: 'custódio',
    birthday: '03/02/2004',
    age: 18
}

//union types
// (como see fosse o ||)

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel) {
    console.log(`${level} = ${message}`)
}

logMessage('Uma mensagem info', 'error')

//Intersection types: &
type About = {
    bio: string;
    interests: string[]
}
type Profile = User & About;
const userWithProfile: Profile = {
    name: 'stepheson',
    lastName: 'custódio',
    birthday: '03/03/2004',
    age: 18,
    bio: 'Olá, sou dev front-end!',
    interests: ['dança', 'cultura', 'tecnologia']
}