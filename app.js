const { json } = require('express');
var express = require('express');
var app = express();

var student = require('./stud.routes');
var employee = require('./emp.routes');
var blog = require('./blog.routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(__dirname+'/open')); 

app.set('view engine', 'pug'); //view engine
app.set('views','./views');

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/home.html');
});


app.use('/student', function(req,res,next){
    console.log('Student middleware');
    next();
});

// app.get('/logo.jpg',(req,res) => {
//     res.sendFile(__dirname+'/logo.jpg')
// })
app.use('/student', student);
app.use('/employee', employee);
app.use('/blog', blog);

// const mongoose = require('mongoose');
// const db = 'mongodb+srv://root:a1b2c3d4@cluster0.w74c2.mongodb.net/merit?retryWrites=true&w=majority';
// mongoose.connect(db).then(() => console.log('Db connected')).catch((err) => console.log(err));

app.listen(8090,() => {
    console.log('Listening on port 8090');
});
