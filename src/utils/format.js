const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    "Desenvolvimento web",
    "Desenvolvimento back-end",
]

const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
/* render -> significa que vai renderizar e somente dizer qual arquivo renderizar e só da para fazer por causa da template engine
// E para fazer isso para todos os proffys que se cadastras, devemos fazer um laçao de repeticação -> foreach - que é para cada'
req.query -> contém todas as informações que vem da página front-end
*/

// funcionalidades da aplicação

// estou convertendo o numero da matéria em nome
function getSubject(subjectNumber) {
    // Como o numero da aula começa com 1, mas no array inicia com o numero 0
    // [+subjectNumber -1] -> para garantir que o subjectNumber seja um numero, coloco o sinal "+", e subtraio -1 para poder fazer a conversão correta para o array
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

// Para converter as horas em minutos, vai ser usado o time.split(":") -> aonde o o split separa a hora em duas strings, e a separação será colocado dentro das chaves, que no caso é o -> :
// const [hour, minutes] -> é uma desistruturação do time, para poder fazer a funcionalidade das horas em minutos
function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return ((hour * 60 ) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}