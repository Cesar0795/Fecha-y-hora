const express = require("express");
require("dotenv").config();
const app=express();
const rutas = require("./Rutas");

app.use('/',rutas);

const port=process.env.port || 3000
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});