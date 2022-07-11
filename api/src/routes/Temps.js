const {Router}= require("express")
const router= Router()
const {Temperamento}= require("../db")
const {API_KEY}=process.env;
const axios=require("axios")

router.get("/",async(req,res)=>{
    const temponcha = await axios.get(`https://api.thedogapi.com/v1/breeds`)
    let repeatedT= temponcha.data.map(e=>e.temperament).toString()
    repeatedT= await repeatedT.split(",")
    
    const espaciados =await repeatedT.map(e=>{
        if(e[0]==" ") return e.split("")
        return e
    })
    const sinEspacio= await espaciados.map(e=>{
        if(Array.isArray(e)){
            e.shift()
            return e.join("")
        }
        return e
    })
    await sinEspacio.forEach(e => {
        if(e != ""){
            Temperamento.findOrCreate({
                where:{
                    name:e
                }
            })
        }
    });
    const allTemps= await Temperamento.findAll()
    res.status(200).send(allTemps)
})

module.exports=router