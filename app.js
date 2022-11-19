const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors())
const sequelize=require('./util/database');
const userRoutes=require('./routes/user');
app.use(userRoutes)
sequelize.sync().then(result=>{
    console.log('database is connected');
    app.listen(3000);
}).catch(err=>console.log(err))