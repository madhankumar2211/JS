var express = require('express');
var router = express.Router();
var stud = [
    {
      name: 'madhan',
      email: 'sample@gmail.com',
      phone: 235345,
      city: 'chennai',
      tech: 'java',
      comp: 'abc'
    },
    {
      name: 'venkat',
      email: 'sample1@gmail.com',
      phone: 9876543,
      city: 'cbe',
      tech: 'python',
      comp: 'xyz'
    }
  ];

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

router.get('/detail/:id',(req,res) => {
    var id = req.params.id;
    var student = stud.find((e) => {
        if(e.phone == id){
            return true;
        }
        else{
            return false;
        }
    });
    res.render('stud_detail.pug',{
        detail : student
    });
});


module.exports = router;