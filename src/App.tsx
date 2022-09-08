import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { links } from './Data';
import { IUser } from './model/IUser';


function App() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const fncLogin = (evt:React.FormEvent) => {
      evt.preventDefault()
      if ( email === 'ali@mail.com' && password === '12345' ) {
        // goto dashboard
        // window.location.href = '/dashboard'
        const user:IUser = {
          email: email,
          password: password
        }
        sessionStorage.setItem('user', email)
        navigate('/dashboard', {state: user})
      }else {
        alert("Kullanıcı adı yada şifre hatalı!")
      }
  }

  // Name / Surname
  // email
  // password
  // age

  useEffect(() => {
    console.log("useEffect Call", email);
  },[])
  
  // search
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log( search );
  }, [search])

  // navBar Search
  const [navBarSearch, setNavBarSearch] = useState('')
  useEffect(() => {
    if ( navBarSearch.length > 1 ) {
      console.log("navBarSearch", navBarSearch);
    }
  }, [navBarSearch])
  
  const [color, setColor] = useState('#ff00ff')
  useEffect(() => {
    const stColor = localStorage.getItem('color')
    if ( stColor ) {
      setColor(stColor)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('color', color)
  }, [color])
  

  return (
    <>
      <NavBar searchFnc={setNavBarSearch} color={color}/>
      <h3>Login Form</h3>
      <form onSubmit={fncLogin} className='col-4'>
        <div className='mb-3'>
            <input type='email' required onChange={(evt)=> setEmail(evt.target.value) } className='form-control' placeholder='E-Mail' />
        </div>
        <div className='mb-3'>
            <input type='password' required onChange={(evt)=> setPassword(evt.target.value) } className='form-control' placeholder='Password' />
        </div>
        <button type='submit' className='btn btn-success'>Send</button>
      </form>
      <hr></hr>
      <div className='col-sm-4'>
        <input onChange={(evt)=> setSearch(evt.target.value) } type='search' className='form-control' placeholder='Search' />
        <input value={color} onChange={(evt)=> setColor(evt.target.value) }  type='color' />
        <div> { color } </div>
      </div>

      <hr></hr>
      { links.map( (item, index) =>
        <li key={index}> <NavLink to={'/detail/'+item.id}>{item.name}</NavLink> </li>
      )}

    </>
  );
}

export default App;