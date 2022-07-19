import React from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { removeFav } from '../../redux/actions'
import "./favorites.css"


function Favorites({setCurrentPage}) {
    const dis=useDispatch()
    const fav=useSelector(state=>state.FavoDogs)
    function del(e){
        dis(removeFav(fav))
    }
  return (
    <div key={fav.id} className="doby">
        <Link to="/home"><button className="ButtonHomeDet" id="home">Home</button></Link>
        <Link to="/create"><button className="ButtonCreateDet">Create</button></Link>
        <h2 className="nameFa">Perros favoritos</h2>
        <ul className="ulFav"> 
            {fav?.map(m=>
            <div key={m.id} className='divFav'>
                <Link to ={"/home/" + m.id} style={{textDecoration:'none'}}>
                    
                        <div className="nameCard">
                        <img src={m.image} alt="not found" className='imageDog'></img>
                        <h1 className="name">{m.name}</h1>
                        <h2 className="name">{m.temperamentos}</h2>
                        </div>
                   
                </Link>
                <button className="delButton" onClick={e=>del(e)} value={m}>X</button>
            </div>
            )}
        </ul>
    </div>
  )
}

export default Favorites