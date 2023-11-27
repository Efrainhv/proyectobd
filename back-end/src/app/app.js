const express = require ('express');
const morgan = require ('morgan'); 
const app = express();
app.use(morgan('dev'));
const router = require ("../../rutas/rutas.js")
app.get('/',(req,res)=>{
   res.send("Hola biembenido");
})
app.use("/api/principal",router);
module.exports=app;