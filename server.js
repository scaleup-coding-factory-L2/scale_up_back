const express = require('express');

const app = express();

const port = 3001;

app.use('/login',require('./routes/Login'))

app.listen(port, ()=>{
    console.log("Server started !");
})
