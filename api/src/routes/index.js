const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs=require("./dogs.js")
const getTemps=require("./Temps.js")
const getFiltros=require("./filtros.js")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/",(req,res)=>{
    res.status(200).send("indic")
})
router.use("/dogs",getDogs);
router.use("/temps",getTemps)
router.use("/filtros",getFiltros)

module.exports = router;
