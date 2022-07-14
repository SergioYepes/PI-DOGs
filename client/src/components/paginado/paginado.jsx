import React from 'react'
import "./paginado.css"
function Paginado({dogPerPg,allDogs,paginado,setCurrentPage,currentPage}) {
  
  const nextPg=(e)=>{
    e.preventDefault()
    if(currentPage<pageN.length)
    setCurrentPage(currentPage + 1)
    console.log(currentPage)
  }
  const prevPg=(e)=>{
    e.preventDefault()
    if(currentPage>1)
    setCurrentPage(currentPage - 1)
    console.log(currentPage)
  }
  const pageN=[]
  for (let i=0; i<Math.ceil(allDogs/dogPerPg);i++){
    pageN.push(i+1)
  }
  return (
    <>    
    <nav>
    <ul className='paginado'>
      <button onClick={e=>prevPg(e)}>👈</button> 
        {pageN.length>1 &&
          pageN.map(n=>(
            <li key={n}>
                <button onClick={()=>paginado(n)}><strong>{n}</strong></button>
            </li>
          ))
        }
      <button onClick={e=>nextPg(e)}>👉</button>
    </ul>
    </nav> 
    
    </>
  )
}

export default Paginado