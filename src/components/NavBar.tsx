import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

interface INavBar  {
  searchFnc?: React.Dispatch<React.SetStateAction<string>>,
  color?: string
}

function NavBar( item: INavBar) {

  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const stSession = sessionStorage.getItem('user')
    if ( stSession === null ) {
        navigate('/')
    }else {
      setEmail(stSession)
    }
  }, [])

  const logOut = () => {
    const answer = window.confirm('Are you sure logout!')
    if ( answer === true ) {
      //sessionStorage.clear()
      sessionStorage.removeItem('user')
      navigate('/')
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: item.color}} >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'>Title Inc.</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to='/'>App</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a onClick={logOut} role='button' className="dropdown-item">Logout</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"> { email } </a>
            </li>
          </ul>
          <form className="d-flex" role="search">

            { item.searchFnc && 
            <>
              <input onChange={(evt) => item.searchFnc!(evt.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </>
            }

          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar