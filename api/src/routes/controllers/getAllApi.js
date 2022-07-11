const axios= require("axios");
const {API_KEY}=process.env;

const getApiInfo= async ()=>{
    const apu= await axios(`https://api.thedogapi.com/v1/breeds`)
    .then(res=>res.data.map(e=>{
        return{
            id:e.id,
            name:e.name,
            heightMin: e.height.metric.split(' - ')[0],
            heightMax: e.height.metric.split(" - ")[1] ?
            e.height.metric.split(' - ')[1] :
            Math.round(e.height.metric.split(' - ')[0] * 1.1),
            weightMin: e.weight.metric.split(' - ')[0] !== "NaN" ?
                e.weight.metric.split(" - ")[0]: 
                (e.weight.metric.split("-")[1])?
                Math.round(e.weight.metric.split("-")[1]* 0.6): "30",
            weightMax: e.weight.metric.split(' - ')[1] ?
                e.weight.metric.split(" - ")[1]:"39",
            lifeSpan:e.life_span,
            temperamentos: e.temperament ? e.temperament:"Not found",
            image: e.image.url
        }
    }))
    return apu
    
}
module.exports = {getApiInfo}