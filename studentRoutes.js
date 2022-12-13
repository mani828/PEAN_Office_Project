const express = require('express');
const router =express.Router();
const studentService = require('../serves/studentService.js');
router.get('/list',async (req,res)=>{
    console.log('Into list');
    try{
        let data = await studentService.getStudents();
        res.json({"status": "ok","data":data});
        console.log('Success list');
    }
    catch(err){
        console.log(err);
        res.json({"status":"unexpected Error","data":null});
    }
});
router.put('/add',async(req,res)=>{
    console.log('Into insert');
    try{
        let userData = req.body;
        let data = await studentService.insertStudent(userData);
        res.json({"status":"ok","data":data.rowCount});
        console.log('Success insert');
    }
    catch (err) {
        console.log(err);
        res.json({"status":"unexpected Error","data":null});
    }
});
router.put('/update',async(req,res)=>{
    console.log('Into update');
    try{
        let userData = req.body;
        let data= await studentService.updateStudent(userData);
        res.json({"status":"ok","data":data.rowCount});
        console.log('Success update');
    }
    catch(err){
        console.log(err);
        res.json({"status":"unexpected Error","data":null});
    }
});
router.delete('/delete',async(req,res)=>{
    console.log('Into delete');
    try{
        let userData = req.body;
        let data = await studentService.deleteStudent(userData);
        res.json({"status":"ok","data":data.rowCount});
        console.log('Success delete');
    }
    catch(err){
        console.log(err);
        res.json({"status":"unexpected Error","data":null});
    }
});
module.exports = router;