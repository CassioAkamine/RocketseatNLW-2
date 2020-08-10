const Database = require('sqlite-async')

// Codigo sql utiliza a crase -> (``) e serão colocadas as instruções aqui
function execute(db) {
    // criando as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTERGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

// O argumento que será chamado em .open; .then() -> tem uma função dentro dos (), não preciso colocar a function dentro dela, apenas coloco o atalho da função
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

// module.exports -> É usado para exportar o banco de dados para fora. 