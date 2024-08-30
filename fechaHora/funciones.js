exports.fec=(req,res,next)=>{
    var fecha = require("./fec");
    console.log(fecha);
    next();
}

exports.ms=(req,res,next)=>{
    var msg = require("./msg");
    console.log(msg);
    next();
}