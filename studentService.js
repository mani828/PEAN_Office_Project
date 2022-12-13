const pgClient = require('../db.js');
async function getStudents(){
    try {
        const query = 'select s."ID",s."Name",s."Class",s."Division",s."Grade",gr."Description" from public."Student" as s inner join public."grade" as gr on gr."Code" = s."Grade"';
        let result = await pgClient.query(query);
        return result.rows;
    }
    catch (err) {
        console.log('Error in students list fetch'+console.err);
        throw new Error('Error in students list fetch');
    }
}
async function insertStudent(userData){
    try{
        let ID = userData.ID;
        let Name = userData.Name;
        let Class = userData.Class;
        let Division = userData.Division;
        let Grade = userData.Grade;
        const query = `INSERT INTO Public."Student"("ID","Name","Class","Division","Grade") VALUES('${ID}','${Name}','${Class}','${Division}','${Grade}')`;
        let result = await pgClient.query(query);
        return result;
    }
    catch (err) {
        console.log('Error in students insert' + console.err);
        throw new Error('Error in students insert');
    }
}
async function updateStudent(userData){
    try {
        let ID = userData.ID;
        let Name = userData.Name;
        let Class = userData.Class;
        let Division = userData.Division;
        let Grade = userData.Grade;
        const query=`UPDATE public. "Student" SET "Name" = '${Name}',"Class" = '${Class}',"Division" ='${Division}',"Grade"='${Grade}' WHERE "ID" = '${ID}' `;
        let result = await pgClient.query(query);
        return result;
    }
    catch(err) {
        console.log('Error in student update' + console.err);
        throw new Error('Error in student update');
    }
}
async function deleteStudent(userData){
    try{
        let ID = userData.ID;
        const query = `DELETE FROM public. "Student" WHERE "ID" = '${ID}'`;
        let result = await pgClient.query(query);
        return result;
    }
    catch(err){
        console.log('Error in student delete'+ console.err);
        throw new Error('Error in student delete');
    }
}
module.exports = {getStudents,insertStudent,updateStudent,deleteStudent}