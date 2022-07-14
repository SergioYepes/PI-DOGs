import React from 'react'
import {Link} from "react-router-dom"
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTemps , postTemp } from '../../redux/actions'
import validate from '../errors/validations'
import "./nueva.css"


function Nueva() {
  const dis=useDispatch()
  const his=useHistory()

  const [error, setError] = useState({})
  // const [select, setSelect] = useState("")
  const temps=useSelector((state)=>state.temps)
  const [Formulario, setFormulario] = useState({
    name: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    lifeSpan: '',
    image: '',
    temperamentos: [],
  })

  useEffect(()=>{
    dis(getTemps())
  },[dis])

  function handleChange(e){
      setFormulario({
        ...Formulario,
        [e.target.name] : e.target.value 
      })
      setError(validate({
        ...Formulario,
        [e.target.name]: e.target.value,
    }));
    console.log(Formulario)
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(error)
    if(!Object.getOwnPropertyNames(error).length && Formulario.name && Formulario.heightMax && Formulario.heightMin && Formulario.weightMax && Formulario.weightMin && Formulario.lifeSpan &&Formulario.image &&Formulario.temperamentos.length)
    {dis(postTemp(Formulario))
    alert("Se ha creado la raza")
    setFormulario({
      name: '',
      heightMin: '',
      heightMax: '',
      weightMin: '',
      weightMax: '',
      lifeSpan: '',
      image: '',
      temperamentos:[],
    })
    his.push("/home")
  }
    else{
      alert("complete los campos correspondientes")
    }

  }
  function handleSelect(e){
    if(!Formulario.temperamentos.includes(e.target.value)){
      setFormulario({
        ...Formulario,
        temperamentos:[...Formulario.temperamentos, e.target.value]
      })
      console.log(Formulario)
    }
  }
  function handleDelete(e){
    setFormulario({
      ...Formulario,
      temperamentos:Formulario.temperamentos.filter(temperament=>temperament !== e)
    })
  }
  



  return (
    <div className="divCreate">
      <Link to="/home"><button className="LinkC">Home</button></Link>
      <form className="form" onSubmit={e=>handleSubmit(e)}>
        <h1 className='tittleC'>New breed creation </h1>
        <br/>
          <div>
            <h4><label>Name: </label></h4>
              <input 
              type="text" 
              name="name"
              value={Formulario.name}
              placeholder="Insert name..."
              onChange={e=>handleChange(e)}
              />
              {error.name && (
                        <p className='error'><strong>{error.name}</strong></p>
                    )}
          </div><br/>
          <div>
            <h4><label>Min Height: </label></h4>
              <input 
              type="text" 
              name="heightMin"
              value={Formulario.heightMin}
              placeholder="Insert height..."
              onChange={e=>handleChange(e)}
              />
              <label><strong> cm</strong></label>
              {error.heightMin && (
                        <p className='error'><strong>{error.heightMin}</strong></p>
                    )}
          </div>
          <div>
            <h4><label>Max Height: </label></h4>
              <input 
              type="text" 
              name="heightMax"
              value={Formulario.heightMax}
              placeholder="Insert heightMax..."
              onChange={e=>handleChange(e)}
              />
              <label><strong> cm</strong></label>
              {error.heightMax && (
                        <p className='error'><strong>{error.heightMax}</strong></p>
                    )}
          </div>
          <div>
            <h4><label>Max weight: </label></h4>
              <input 
              type="text" 
              name="weightMax"
              value={Formulario.weightMax}
              placeholder="Insert weightMax"
              onChange={e=>handleChange(e)}
              />
              <label><strong> kg</strong></label>
              {error.weightMax && (
                        <p className='error'><strong>{error.weightMax}</strong></p>
                    )}
              
          </div>
          <div>
            <h4><label>Min weight: </label></h4>
              <input 
              type="text" 
              name="weightMin"
              value={Formulario.weightMin}
              placeholder="Insert weigntMin"
              onChange={e=>handleChange(e)}
              />
              <label><strong> kg</strong></label>
              {error.weightMin && (
                        <p className='error'><strong>{error.weightMin}</strong></p>
                    )}
          </div>
          <div>
            <h4><label>Life Span: </label></h4>
              <input 
              type="text" 
              name="lifeSpan"
              value={Formulario.lifeSpan}
              placeholder="Insert lifeSpan"
              onChange={e=>handleChange(e)}
              />
              <label><strong> years</strong></label>
              {error.lifeSpan && (
                        <p className='error'><strong>{error.lifeSpan}</strong></p>
                    )}
          </div>
          <div>
            <h4><label>Image: </label></h4>
              <input 
              type="text" 
              name="image"
              value={Formulario.image}
              placeholder="Insert image link..."
              onChange={e=>handleChange(e)}
              />
          </div>
          <div>
            <select onChange={e=>{handleSelect(e)}}>
              <option value="selected" hidden>Select</option>
              {
                temps?.sort((a,b)=>{
                  if(a.name<b.name) return -1;
                  if(a.name>b.name) return 1
                  return 0
                }).map(e=>{
                  return(
                    <option value={e.name} key={e.id}>{e.name}</option>
                  )
                })
              }
            </select>
            {Formulario.temperamentos.map(e=>{
                return (
                  <ul key={e} className='allTemps'>
                    <li>
                      <p className='temp'><strong>{e}</strong></p>
                      <button onClick={()=>handleDelete(e)} className='x' value={e}>X</button>
                    </li>
                  </ul>
                )
              })
            }
          </div>
          <button type="submit" className='boop' ><strong>Boop</strong></button>
            {/* onClick={e=>handlePush(e)} */}
      </form>
    </div>
  )
}

export default Nueva