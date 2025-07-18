const database = require('../infra/database')
exports.getPosts = async function (){
    const [rows] = await database.query('select * from post')
    return rows
}