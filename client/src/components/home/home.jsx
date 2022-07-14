import React, { useState,useEffect } from 'react'
import Cards from '../cards/cards'
import {useDispatch, useSelector} from "react-redux"
import { getAllDogs } from '../../redux/actions'
import NavBar from '../navBar/navBar'
import Paginado from '../paginado/paginado'
import Filtros from '../filtros/filtros'
import "./home.css"
const gift="https://i.pinimg.com/originals/53/ed/3f/53ed3f69d8af8e1fb7b0025a97452e38.gif"

function Home() {
    const dispatch=useDispatch()
    const allDogs=useSelector((state)=>state.allDogs)

    const[loading,setLoading]=useState(true)
    const[currentPage,setCurrentPage]=useState(1)
    const[dogPerPg]=useState(8)
    const inLastDog= currentPage*dogPerPg
    const inFirstDog= inLastDog-dogPerPg
    const currentDog=allDogs.slice(inFirstDog,inLastDog)

    const paginado=(pageN)=>{
      setCurrentPage(pageN)
    }


    useEffect(()=>{
        dispatch(getAllDogs())
        setLoading(false)
    },[dispatch])
   
    
  return (
    <div className='home'>
      <div className='divTotal'>
        <NavBar setCurrentPage={setCurrentPage}/>
        <h1 className="welcome">🤘Bienvenido/a🤘</h1>
        <div className="filtros"><Filtros setCurrentPage={setCurrentPage} /></div>
        </div>
      {loading?<img src={gift} alt="Loading..."/>:
        <div>
          <div className="paginado">
          <Paginado dogPerPg={dogPerPg} allDogs={allDogs.length} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
        <div><Cards allDogs={currentDog}/></div>
        <div className="paginado">
          <Paginado dogPerPg={dogPerPg} allDogs={allDogs.length} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
        </div>
          }
    </div>
  )
}

export default Home