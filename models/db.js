const mongoose=require('mongoose');
mongoose.connect('mongodb://localHost:27017/EmployeeDB',{useNewUrlParser:true},(error)=>{
    if(!error){console.log('mongo db is running activly');}
});



require('./employee.model');
