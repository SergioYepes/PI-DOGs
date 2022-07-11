const {Temperamento,Breed}= require("../../db.js")
const {getAllDogs}=require("./getAllDogs")

const nombreAs= async()=>{
    try {
        let doggys= await getAllDogs()
        doggys==="asc"?
        doggys.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
            }
            return 0
        }) :
        doggys.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
            }
            return 0;
        })
        return doggys
    } catch (error) {
       return error
    }
}
const nombreDes= async()=>{
    try {
        let doggys= await getAllDogs()
        doggys==="desc"?
        doggys.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
            }
            return 0
        }) :
        doggys.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
            }
            return 0;
        })
        return doggys
    } catch (error) {
       return error
    }
}
const minWeight= async()=>{
    let doggys= await getAllDogs()
    doggys==="min"?
    doggys.sort(function (a, b) {
        if (parseInt(a.weightMin) > parseInt(b.weightMin)){
            return 1
        };
        return 0
    }) :
    doggys.sort(function (a, b) {
        if (parseInt(a.weightMin) < parseInt(b.weightMin)){
            return -1
        };
        return 0
    });
return doggys
}
const maxWeight= async()=>{
    let doggys= await getAllDogs()
    doggys==="max"?
    doggys.sort(function (a, b) {
        if (parseInt(a.weightMax) < parseInt(b.weightMax)){
            return 1
        };
        return 0
    }) :
    doggys.sort(function (a, b) {
        if (parseInt(a.weightMax) > parseInt(b.weightMax)){
            return -1
        };
        return 0
    });
return doggys
}
const maxHeight= async()=>{
    let doggys= await getAllDogs()
    doggys==="max"?
    doggys.sort(function (a, b) {
        if (parseInt(a.heightMax) < parseInt(b.heightMax)){
            return 1
        };
        return 0
    }) :
    doggys.sort(function (a, b) {
        if (parseInt(a.heightMax) > parseInt(b.heightMax)){
            return -1
        };
        return 0
    });
return doggys
}
const minHeight= async()=>{
    let doggys= await getAllDogs()
    doggys==="min"?
    doggys.sort(function (a, b) {
        if (parseInt(a.heightMin) > parseInt(b.heightMin)){
            return 1
        };
        return 0
    }) :
    doggys.sort(function (a, b) {
        if (parseInt(a.heightMin) < parseInt(b.heightMin)){
            return -1
        };
        return 0
    });
return doggys
}
module.exports={
    nombreAs,
    nombreDes,
    minWeight,
    maxWeight,
    maxHeight,
    minHeight,
}