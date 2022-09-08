import React, { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import NavBar from './components/NavBar'

function Detail() {

  const { id } =  useParams()
  const [ searchParams ] = useSearchParams()
  console.log( searchParams.get("cid") );
  

  return (
    <>
        <NavBar/>
        <h1>Detail - { id }</h1>

    </>
    
  )
}

export default Detail