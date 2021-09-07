var express = require('express');
var router = express.Router();
var emp = [];

router.get('/regemp',(req,res) => {
    res.sendFile(__dirname+'/empreg.html');
});

router.post('/empregister',(req,res) => {
    emp.push(req.body);
    res.send("Registration Success");

});

router.get('/listemp',(req,res) => {
    res.render('emp.pug',{
        allemp : emp
    });
});

module.exports = router;