var express = require('express');
var router = express.Router();
var blog = [];

router.get('/',(req,res) => {
    res.render('blog.pug',{
        allblog : blog
    });
});

router.post('/posts',(req,res) =>{
    req.body.like = 0;
    blog.push(req.body);
    res.render('blog.pug',{
        allblog : blog
    });
});

router.get('/posts/like',(req,res) => {
    blog[req.query.index].like += 1;
    res.render('blog.pug',{
        allblog : blog
    });
});

module.exports = router;
