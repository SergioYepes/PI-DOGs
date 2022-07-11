import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/card'
import "./cards.css"

function Cards({allDogs}) {
  return (
    <div className="cardHome">
        {allDogs && allDogs.map((d)=>{
            return (
              <div key={d.id} >
                <Link to ={"/home/" + d.id} style={{textDecoration:'none'}}>
                    <Card
                        name={d.name}
                        image={d.image}
                        temperamentos={d.temperamentos}
                        weightMax={d.weightMax}
                        weightMin={d.weightMin}
                        key={d.id}
                    />
                </Link> 
              </div> 
            )
        })}
    </div>
  )
}

export default Cards