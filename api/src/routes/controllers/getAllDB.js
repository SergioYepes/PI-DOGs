const {Breed, Temperamento}= require ("../../db")

const getDbInfo= async ()=>{
    return await Breed.findAll({
        include:{
            model:Temperamento,
            attributes: ["name"],
            throught:{
                attributes:[],
            }
        }
    })
}
module.exports={
    getDbInfo
}