import React from 'react'
import "./card.css"

function Card({image,name,temperamentos,weightMin,weightMax}) {
  return (
    <div className='divCard'>
      <img src={image} alt="not found"  className='imageDog' />
      <div className="nameCard">
      <h1 className="name">{name}</h1>
      <h3 className="name">{function(temperamentos){
        if(typeof(temperamentos)==="string"){
          return temperamentos
        }
        if(Array.isArray(temperamentos)){
          let tempus=temperamentos.map(e=>e.name)
            return tempus.join(", ")
        }
      }(temperamentos)}</h3>
      
      {
        name !== "Sorry but we don´t have that dog" ?
        <h3 className="name">weight: {weightMax} - {weightMin}</h3>:
        <></>
      }
      </div>
    </div>
  )
}

export default Card