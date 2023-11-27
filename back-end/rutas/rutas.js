const res = require("express/lib/response");
const router = require("express").Router();
const where = require("sequelize");
const datosPersonales = require('../model/datosPersonales.model');
router.get("/datosPersonales",async (req,res)=>{
const select = await DatosPersonales.findAll();
res.send("conssulta");
res.status(201).json({
    ok: true,
    status:200,
    body:select
});
});
module.exports = router;