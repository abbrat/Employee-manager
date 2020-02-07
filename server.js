require('./models/db');

const express=require('express');
const app=express();
const path=require('path');
const employeeController = require('./controller/employeeController');
const exphbs=require('express-handlebars');
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(3000,()=>{
    console.log('+');
});


app.use('/employee',employeeController);