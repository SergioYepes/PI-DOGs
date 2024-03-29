import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import { getAllDogs} from '../../redux/actions'
import SearchBar from '../searchBar/searchBar'
import "./navBar.css"
const logo= "data:image/jpeg;base64,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"

function NavBar({setCurrentPage}) {
    const dis=useDispatch()
    function handleClick(e){
        e.preventDefault()
        dis(getAllDogs())
        setCurrentPage(1)
    }
    // function favClick(e){
    //     e.preventDefault()
    //     dis(addFavDog())
    //     setCurrentPage(1)
    // }
  return (
    <header className="navbar">
      <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="Logo" height='70px'/>
                    </Link>
                </div>
            
                <div className="links">  
                    <div>
                        <Link style={{textDecoration:'none'}} to="/favs">
                            <div className="favButton" >❤️</div>
                        </Link>
                    </div>
                    {/* <div>
                        <Link className="Link" to='/home'>
                            <button className="linkToHome" onClick={e=>handleClick(e)}>Home </button>
                        </Link>
                    </div> */}
                    <div>
                        <Link className="Link" to="/home">
                            <div className="linkToHome" >Home</div>
                        </Link>
                    </div>
                    <div>
                        <Link className="Link" to='/create'>
                            <div className="linkToCreate">New Breed</div>
                        </Link>
                    </div>
                    <div className="searchBar">
                        <SearchBar setCurrentPage={setCurrentPage}/>
                    </div>
                </div>
    </header>
  )
}

export default NavBar