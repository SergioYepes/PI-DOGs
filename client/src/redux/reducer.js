import{actions} from "./actions"
const {GET_ALL_DOGS,
    GET_DETAILS,
    GET_TEMPS,
    BY_NAME,
    BY_ASC,
    BY_DESC,
    BY_MINWEIGHT,
    BY_MINHEIGHT,
    BY_MAXHEIGHT,
    BY_MAXWEIGHT,
    FILTER_TEMP,
    FILTER_BY_ORIGIN}=actions
const initialState={
    allDogs:[],
    detail:[],
    temps:[],
    sortDogs:[],
    byName:[],
}

function rootReducer(state=initialState, {type,payload}){
    switch(type){
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs:payload, 
                sortDogs:payload
            }
            case BY_NAME:
                return{
                    ...state,
                    allDogs:payload
                }
        case GET_DETAILS:
            return {
                ...state,
                detail:payload
            }
        case GET_TEMPS:
           return  {
                ...state,
                temps:payload
                 }
        case BY_ASC:
                    return {
                        ...state,
                        allDogs:payload
                    }
        case BY_DESC:
                    return{
                        ...state,
                        allDogs:payload
                    }
        case BY_MINWEIGHT:
            return {
                ...state,
                allDogs:payload
            }
        case BY_MINHEIGHT:
            return {
                 ...state,
                 allDogs:payload
                }
        case BY_MAXHEIGHT:
            return {
                ...state,
                 allDogs:payload
                }
        case BY_MAXWEIGHT:
             return {
                ...state,
                allDogs:payload
                    }
        case FILTER_TEMP:{
            const allDogs= state.sortDogs;
            const tempFilt=payload==="All"? allDogs: allDogs.filter(e=>{
                if(typeof(e.temperamentos)==="string") return e.temperamentos.includes(payload)
                if(Array.isArray(e.temperamentos)){
                    let temps= e.temperamentos.map(el=>el.name)
                    return temps.includes(payload)
                }
                return true
            })
            return{
                ...state,
                allDogs:tempFilt
            }
        }
        case FILTER_BY_ORIGIN:{
            const all=state.sortDogs
            const origin= payload==="All" ? all: payload==="created" ? all.filter(e=>e.createdInDb) : all.filter(e=>!e.createdInDb)
            return{
                ...state,
                allDogs:origin
            }
        }
        default:
        return state
    }
    
}
export default rootReducer