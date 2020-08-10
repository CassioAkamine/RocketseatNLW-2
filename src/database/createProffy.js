// Não conseguirei usar o -> await <- em uma function sem que -> async <- esteja na frente de function 
module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {

    // await -> significa que vai aguardar uma promessa, o que seria isso, todo banco de dados, demora um tempo para executar todas as ações, então o await irá aguardar antes que vá para a proxima linha;
    //inserir daos na table de proffys

    // INSERT - essa é a estrtura para inserir dados, 
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //inserir dados na table de classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na table de class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // await Promise.all(insertedAllClassScheduleValues) -> vai aguardar um array de muitas promessas que esta sendo executado no insertedAllClassScheduleValues;
    // aqui executa todos os db.runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)

}