import React from 'react'
import {connect,useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import Card from '../card/card'
import { addFavDog } from '../../redux/actions'

import "./cards.css"


function  Cards({allDogs,addFavDogs}) {
  const fav=useSelector(state=>state.FavoDogs)
  let names=fav.map(e=>e.name)
  let namess=allDogs.map(e=>e.name)
  const red="❤️"
  const black= "🖤"
   const heart=namess.includes(names) ? black : red
  return (
    <div className="cardHome">
        {allDogs && allDogs.map((d)=>{
            return (
              <div key={d.id} >
                <button className="favButton" onClick={()=>addFavDogs({name:d.name, image:d.image, temperamentos:d.temperamentos, id:d.id})}>{heart}</button>
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
function mapDispatchToProps(dispatch){
  return{
    addFavDogs: dog=>dispatch(addFavDog(dog))
  }
}

export default connect(null,mapDispatchToProps)(Cards);