// (' ./ ') -> 
const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Estratégia de inserir os dados 
    proffyValue = {
        name: "Diego Fernandes",
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: "12988310460",
        bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'
    },

        classValue = {
            subject: "1",
            cost: "20"
            // o proffy_id virá pelo banco de dados
        }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
            // o time está sendo colocado em minutos para poder ajudar a consultar os dados;
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
            // o classi_id será gerado pelo banco de dados, após cadastrar a class;
        }

    ]
    // Para aguardar da forma await, a function precisa ser async no Database.then(db) => {...}

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Estratégia de consultar os dados
    // todos os proffys
    // * -> significa todos em banco de dados
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)
    // Acima vai consultar somente os dados dos proffys, sem as demais informações;

    // Consultar as classes de um determinado professor e trazer junto os dados do proffy
    // classes.* -> o '.*' quer dizer que vai pegar todos os dados da tabela classes, pois, não será somente uma tabela, e sim várias; 
    // JOIN classes ON () -> Será feita a união (junção, juntar) das tabelas, de dentro dos () -> é em qual campo que eles fazem a união;
    // WHERE -> Onde iremos consultar os dados de um determinado proffy;
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h 
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser maior

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)

})