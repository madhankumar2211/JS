const { json } = require('express');
var express = require('express');
var app = express();

var student = require('./stud.routes');
var employee = require('./emp.routes');
var blog = require('./blog.routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'pug'); //view engine
app.set('views','./views');

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/home.html');
});

app.use('/student', student);
app.use('/empoyee', employee); 
app.use('/blog', blog);

app.listen(8090,() => {
    console.log('Listening on port 8090');
});
