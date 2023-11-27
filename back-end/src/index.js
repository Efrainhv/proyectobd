const app =require ('./app/app.js');
const port = process.env.port || 3001;//declaracion del puerto del servidor en donde vanmos a trabajar

app.listen(port, ()=> {//metodo flecha
console.log("el seervidor corriendo");
})