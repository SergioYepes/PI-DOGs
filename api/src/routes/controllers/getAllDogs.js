const {getApiInfo}= require("./getAllApi")
const { getDbInfo } = require("./getAllDB")

const getAllDogs= async (name)=>{
    const apincha= await getApiInfo()
    const dataBase= await getDbInfo()
    const total = apincha.concat(dataBase).sort((a,b)=>{
        return a.name < b.name ? -1 : 1
    })
    if(!name)return total
    if(name){
        let filt=total.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
        if(!filt.length){
            throw new Error("dog not found") 
        }
        return filt
    }

}
module.exports={
    getAllDogs
}