var express = require('express');
var router = express.Router();
var stud = [];

router.get('/regstud',(req,res) => {
    res.sendFile(__dirname+'/studreg.html');
});

router.post('/studregister',(req,res) => {
    stud.push(req.body);
    res.send("Registration Success");
});

router.get('/liststud',(req,res) => {
    res.render('stud.pug',{
        allstud : stud
    });
});

module.exports = router;