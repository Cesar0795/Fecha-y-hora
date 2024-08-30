const rutas = require('express').Router();

const funciones = require("./funciones");

rutas.get("/",funciones.fec,funciones.ms,(req,res)=>{
    res.send("Mensaje de fecha y hora enviado");
})

rutas.get("/home",funciones.fec,funciones.ms,(req,res)=>{
    res.send("Mensaje personalizado enviado");
})

module.exports = rutas;