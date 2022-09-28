import axios from "axios";
import { baseURL ,local} from "./constants";

export const actions={
    GET_TEMPS:"GET_TEMPS",
    GET_ALL_DOGS:"GET_ALL_DOGS",
    SEARCH_FAIL:"SEARCH_FAIL",
    GET_DETAILS:"GET_DETAILS",
    BY_NAME:"BY_NAME",
    BY_ASC:"BY_ASC",
    BY_DESC:"BY_DESC",
    BY_MINWEIGHT:"BY_MINWEIGHT",
    BY_MAXWEIGHT:"BY_MAXWEIGHT",
    BY_MINHEIGHT:"BY_MINHEIGHT",
    BY_MAXHEIGHT:"BY_MAXHEIGHT",
    FILTER_TEMP:"FILTER_TEMP",
    FILTER_BY_ORIGIN:"FILTER_BY_ORIGIN",
    ADD_FAV:"ADD_FAV",
    REMOVE_FAV:"REMOVE_FAV",
    UPDATE:"UPDATE",
    DELETE:"DELETE",
    VACIAR:"VACIAR",
}
const{
    GET_ALL_DOGS,
    GET_TEMPS,
    GET_DETAILS,
    BY_NAME,
    BY_DESC,
    BY_ASC,
    BY_MINWEIGHT,
    BY_MAXWEIGHT,
    BY_MINHEIGHT,
    BY_MAXHEIGHT,
    FILTER_TEMP,
    FILTER_BY_ORIGIN,
    ADD_FAV,
    REMOVE_FAV,
    UPDATE,
    DELETE,
    VACIAR

}=actions

// export function getAllDogs(){
//     return function (dispatch){
//         return fetch(`${local}/dogs`)
//         .then(response=> response.json())
//         .then(post=> dispatch({type:GET_ALL_DOGS,payload:post}))
//         .catch(e=>"No se conecto bien" + e)
// }
// }
export function getAllDogs(){
    return async function (dispatch){
        try {
            let res= await axios.get(`${baseURL}/dogs`)
            const response=res.data
            return dispatch({type:GET_ALL_DOGS,payload:response})
        } catch (error) {
            alert(e=>"No se conecto bien" + e)
        }
    }
}
export function vaciar(){
    return {
        type:VACIAR
    }
}
export const byName = (name) => (dispatch) => {
    return fetch(`${baseURL}/dogs?name=${name}`)
      .then((response) => response.json())
      .then((res) => {
        // console.log(res)
        if (res.error) return alert("Select an existent Breeds");
        dispatch({ type: BY_NAME, payload: res });
      });
  };
// export function byName(payload){
//     return function(dispatch) {
//     return fetch(`http://localhost:3001/dogs?name=${payload}`)
//       .then((response) => response.json())
//       .then((res) => {
//         if (res.error) return alert("Dog not found");
//         dispatch({ type: BY_NAME, payload: res });
//       });
//   };
// }
export function getDetails(id){
    return async function (dispatch){
    try {
        const res=await fetch(`${baseURL}/dogs/${id}`)
        const response= await res.json()
        return dispatch({type:GET_DETAILS,payload:response})
    } catch (error) {
        console.log(error);
    }
    }
}

export function getTemps(){
   return function (dispatch){
    return fetch(`${baseURL}/temps`)
                .then(res=>res.json())
                .then(res=> dispatch({type:GET_TEMPS,payload:res}))
                .catch(err=>"en ruta temps f" + err)        
   }
}
export function postTemp(payload){
    return async function (dispatch){
        try {
             const response = axios.post(`${baseURL}/dogs`, payload);
            
            return response.data
        } catch (error) {
            console.log("no se conecto bien" + error);
        }
         
    }
}
export function filtradoAS(){
    return function (dispatch){
        return fetch(`${baseURL}/filtros/asc`)
        .then(response=> response.json())
        .then(post=> dispatch({type:BY_ASC,payload:post}))
        .catch(e=>"No se conecto bien")
    }
}
export function filtradoDS(){
    return function (dispatch){
        return fetch(`${baseURL}/filtros/desc`)
        .then(response=> response.json())
        .then(post=> dispatch({type:BY_DESC,payload:post}))
        .catch(e=>"No se conecto bien")
    }
}
export function minWeight(){
    return function (dispatch){
        return fetch(`${baseURL}/filtros/Min`)
        .then(response=> response.json())
        .then(post=> dispatch({type:BY_MINWEIGHT,payload:post}))
        .catch(e=>"No se conecto bien")
    }
}
export function maxWeight(){
    return function (dispatch){
        return fetch(`${baseURL}/filtros/Max`)
        .then(response=> response.json())
        .then(post=> dispatch({type:BY_MAXWEIGHT,payload:post}))
        .catch(e=>"No se conecto bien")
    }
}
export function minHeight(){
    return function (dispatch){
        return fetch(`${baseURL}/filtros/MinH`)
        .then(response=> response.json())
        .then(post=> dispatch({type:BY_MINHEIGHT,payload:post}))
        .catch(e=>"No se conecto bien")
    }
}
export function maxHeight(){
    return function (dispatch){
        return fetch(`${baseURL}/filtros/MaxH`)
        .then(response=> response.json())
        .then(post=> dispatch({type:BY_MAXHEIGHT,payload:post}))
        .catch(e=>"No se conecto bien")
    }
}
export function filtradoByTemp(payload){
    return {
        type:FILTER_TEMP,
        payload:payload,
    }
}
export function filtradoByOrigin(payload){
    return{
        type:FILTER_BY_ORIGIN,
        payload
    }
}
export function addFavDog(payload){
    return {
        type:ADD_FAV,
        payload
    }
}
export function removeFav(payload){
    return {
        type:REMOVE_FAV,
        payload
    }
}
export function update(id){
    return async function (dispatch){
        try {
            console.log(id)
            await axios.put(`${baseURL}/dogs/${id}` )
            return dispatch({type:UPDATE,id})
        } catch (error) {
            alert(error)
        }
    }
}
export function deleteDB(id){
    return async function (dispatch){
        try {
            await axios.delete(`${baseURL}/dogs/${id}`)
            return dispatch({type:DELETE, id})
        } catch (error) {
            alert("can´t delete this dog due to is in api or does not exist")
        }
    }
}

