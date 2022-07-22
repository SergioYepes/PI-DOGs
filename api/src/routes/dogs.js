require("dotenv").config();
const {Router} =require("express")
const router=Router();
const {Breed,Temperamento}= require("../db.js")
const {getAllDogs}= require("./controllers/getAllDogs")
const namsus= "https://preview.redd.it/gce4dkkyx7z41.png?auto=webp&s=99843dde095f9627961fb4e781d67d05da332345"

router.get("/", async(req,res)=>{
    let {name}=req.query;
    try {
        const dogs= await getAllDogs(name)
        res.status(200).send(dogs)
    } catch (error) {
       res.status(404).json({error:"error"}) 
    }
})
router.get("/:id",async(req,res)=>{
    const {id}=req.params
    const allBreeds= await getAllDogs()
    if (id){
        let breed= await allBreeds.filter(e=> e.id==id)
        breed.length? res.status(200).send(breed): res.status(404).send({name:`Sorry but we don´t have this ${id} dog 🤡`, image: namsus})
    }
})
router.post("/",async(req,res)=>{
    const{name,heightMin,heightMax,weightMin,weightMax,lifeSpan,temperamentos,image}=req.body
    let canchaCreada= await Breed.create({
        name,heightMin,heightMax,weightMin,weightMax,lifeSpan,image
    })
    let temperamentusDB= await Temperamento.findAll({
        where:{
            name:temperamentos
        }
    })
    canchaCreada.addTemperamento(temperamentusDB)
    res.status(200).send("Created 🦮")
})
router.put("/:id",async (req,res)=>{
    try {
        const {id}=req.params
        const{name,heightMin,heightMax,weightMin,weightMax,lifeSpan,image}=req.body
        await Breed.update(
        {name,heightMin,heightMax,weightMin,weightMax,lifeSpan,image},
        {where:{
            id
        }}
        )
    res.status(200).send("cambios realizados")
    } catch (error) {
        res.status(400).send("No se pudo actualizar el user")
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        let{id}=req.params
        res.json(await Breed.destroy({
            where:{
                id 
            }
        }))   
    } 
    catch (error) {
        res.status(400).send("No se pudo borrar el user")
    }
    console.log("esto sirve")
})

module.exports=router;