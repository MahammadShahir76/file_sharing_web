const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');
const dbConnection = require('./DBconnection/db');

const app=express();

app.use(cors())
app.use("/",router);

dbConnection();
app.listen(5000,()=> console.log("server running succesfully"))