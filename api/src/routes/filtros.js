const { Router } = require('express');
const router=Router()
const {nombreAs,
    nombreDes,
    minWeight,
    maxWeight,
    maxHeight,
    minHeight}= require("./controllers/getFilters.js")

router.get("/asc",async(req,res)=>{
    try {
        let az=await nombreAs()
        res.status(200).send(az)
    } catch (error) {
        console.log("error en la ruta /asc"+ error)
    }
})
router.get("/desc",async(req,res)=>{
    try {
        let za=await nombreDes()
        res.status(200).send(za)
    } catch (error) {
        console.log("error en la ruta /desc"+ error)
    }
})
router.get("/Max",async(req,res)=>{
    try {
        let Max=await maxWeight()
        res.status(200).send(Max)
    } catch (error) {
        console.log("error en la ruta /Max"+ error)
    }
})
router.get("/Min",async(req,res)=>{
    try {
        let Min=await minWeight()
        res.status(200).send(Min)
    } catch (error) {
        console.log("error en la ruta /Min"+ error)
    }
})
router.get("/Max",async(req,res)=>{
    try {
        let Max=await maxWeight()
        res.status(200).send(Max)
    } catch (error) {
        console.log("error en la ruta /Max"+ error)
    }
})
router.get("/MaxH",async(req,res)=>{
    try {
        let Max=await maxHeight()
        res.status(200).send(Max)
    } catch (error) {
        console.log("error en la ruta /MaxH"+ error)
    }
})
router.get("/MinH",async(req,res)=>{
    try {
        let Min=await minHeight()
        res.status(200).send(Min)
    } catch (error) {
        console.log("error en la ruta /Min"+ error)
    }
})
module.exports=router