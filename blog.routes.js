var express = require('express');
var router = express.Router();
var blog = [];

router.get('/',(req,res) => {
    res.render('blog.pug',{
        allblog : blog
    });
});

router.post('/posts',(req,res) =>{
    blog.push(req.body);
    res.render('blog.pug',{
        allblog : blog
    });
});

module.exports = router;
