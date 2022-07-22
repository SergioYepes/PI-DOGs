import React, { useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { getDetails,vaciar } from '../../redux/actions'
import "./detalles.css"


function Detalles() {
  const dis=useDispatch()
  // const his=useHistory()
  let allDogis=useSelector((state=>state.detail))
  const {id}=useParams()
  useEffect(()=>{
    dis(getDetails(id))
    return ()=>dis(vaciar())
  },[dis,id])
  console.log(allDogis)
  return (
    <div className='divDetails'>
      <Link to="/home"><button className="ButtonHomeDet" id="home">Home</button></Link>
      <Link to="/create"><button className="ButtonCreateDet">Create</button></Link>
      {/* <button className="ButtonHomeDet" onClick={()=>his.push(`/create/${id}`)}>Update</button> */}
      {
        allDogis.length > 0 ?
          <div>
            <h1 className="nameD">{allDogis[0].name}</h1>
            <ul className="list">
              <li>
                <img src={allDogis[0].image} alt={allDogis[0].image} className="image"/>
              </li>
              <li id="caja">
                <div>
                  <h2 className="characters" id="h2">Temperamentos: </h2>
                  <ul className="allTemps">
                    {allDogis[0].createdInDb ?
                  allDogis[0].temperamentos.map(e=>{
                    return <li key={e.breed_temperamento.temperamentoId}><label>{e.name}</label></li>
                  }) 
                  :allDogis[0].temperamentos ?
                    allDogis[0].temperamentos.split(" , ").map(e=>{
                      return <li key={e}><p>{e} </p></li>
                    })
                   : "Temperaments not found"
                  } 
                  <h4 className="characters">Height: </h4>
                    <p>{allDogis[0].heightMax} cm - {allDogis[0].heightMin} cm</p>
                  
                  <h4 className="characters">Weight: </h4>
                    <p>{allDogis[0].weightMax} kg - {allDogis[0].weightMin} kg</p>    
                  
                  <h4 className="characters">Life Span: </h4>
                    <p>{allDogis[0].lifeSpan}</p>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          :
          <div className="loading">
            <h1><strong>Loading...</strong></h1>
          </div>
      }
    </div>
  )
}

export default Detalles