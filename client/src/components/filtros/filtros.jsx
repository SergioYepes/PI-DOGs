import React ,{useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs, filtradoAS, filtradoDS, minWeight, maxWeight ,minHeight,maxHeight, filtradoByTemp, getTemps, filtradoByOrigin} from '../../redux/actions'
import "./filtros.css"

function Filtros({setCurrentPage}) {
  const dis=useDispatch()
  const temps=useSelector(state=>state.temps)
  const [az,setAz]=useState("")
  const [Weight,setWeight]= useState("")
  const [height,setHeight]= useState("")
  const [temp]= useState("")
  const [orden,setOrden]= useState("")

  
  useEffect(()=>{
    if(az !==""){
      if(az==="Select"){
        dis(getAllDogs())
      }
      if(az==="asc"){
        dis(filtradoAS())
      }
      if(az==="desc"){
        dis(filtradoDS())
      }
    }
  },[dis,az])
  useEffect(()=>{
      if(Weight!==""){
        if(Weight==="Select"){
          dis(getAllDogs())
        }
        if(Weight==="desc"){
          dis(minWeight())
        }
        if(Weight==="asc"){
          dis(maxWeight())
        }
      }
  },[dis,Weight])
  useEffect(()=>{
    if(height!==""){
      if(height==="Select"){
        dis(getAllDogs())
      }
      if(height==="desc"){
        dis(minHeight())
      }
      if(height==="asc"){
        dis(maxHeight())
      }
    }
},[dis,height])
  useEffect(()=>{
    dis(getTemps())
    dis(filtradoByTemp(temp))
  },[dis,temp])
  function SortByNameAZ(e){
    setAz(e.target.value)
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  function SortByWeight(e){
    setWeight(e.target.value)
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  function SortByHeight(e){
    setHeight(e.target.value)
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleTemp(e){
    e.preventDefault();
    setCurrentPage(1);
    dis(filtradoByTemp(e.target.value))
  }
  function FilterOrigin(e){
    e.preventDefault();
    setCurrentPage(1);
    dis(filtradoByOrigin(e.target.value))
  }
  

  return (
    <div>
      <ul className="listado">
        <li className='content-select'>
            <h3 className="nameF">Temperaments</h3>
                <select onChange={e=> handleTemp(e)}>
                  <option key={0} value="All">Select</option>
                    {temps?.sort(function(a,b){
                      if(a.name>b.name) return -1
                      if(a.name<b.name) return 1
                      return 0
                    }).map(temp=>{
                      return(
                       <option key={temp.id} value={temp.name}>{temp.name}</option>
                        )
                        })}
                </select>
        </li>
        <li className='content-select' >
        <h3 className="nameF">Origin</h3>
            <select onChange={e => FilterOrigin(e)}  >
              <option value='All'>All breeds</option>
              <option value='api'>Existent breeds</option>
              <option value='created'>Created breeds</option>
            </select>
       </li>
        <li className='content-select'>
        <h3 className="nameF">Name</h3>
          <select onChange={e=>SortByNameAZ(e)}>
            <option value="selected" hidden>Sort breeds by name</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </li>
        <li className='content-select'>
        <h3 className="nameF">Weight</h3>
          <select onChange={e=>SortByWeight(e)}>
            <option value="selected" hidden>Sort breeds by Weight</option>
            <option value="asc">Max</option>
            <option value="desc">Min</option>
          </select>
        </li>
        <li className='content-select'>
        <h3 className="nameF">Height</h3>
          <select className="select" onChange={e=>SortByHeight(e)}>
            <option value="selected" hidden>Sort breeds by Height</option>
            <option value="asc">Max</option>
            <option value="desc">Min</option>
          </select>
        </li>
      </ul>
    </div>
  )
}

export default Filtros