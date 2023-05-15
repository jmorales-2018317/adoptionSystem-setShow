import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { AuthContext } from '../Index'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { setLoggedIn, loggedIn, setDataUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const login = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:2651/user/login', form)
      if (data.token) {
        setLoggedIn(true)
        localStorage.setItem('token', data.token)
        setDataUser({
          name: data.userLogged.name,
          username: data.userLogged.username,
          role: data.userLogged.role
        })
        /* 
        localStorage.setItem('name', data.userLogged.name)
        localStorage.setItem('username', data.userLogged.username)
        localStorage.setItem('role', data.userLogged.role) */
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err)
      alert(err.response.data.message)
      throw new Error('Error login failed')
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <h2 className='text-center'>Log In</h2>
        <form className='m-5 text-center'>
          <div className='mb-3'>
            <label className='form-label' htmlFor="">Username</label>
            <input onChange={handleChange} name='username' className='form-control' type="text" />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor="">Password</label>
            <input onChange={handleChange} name='password' className='form-control' type="password" />
          </div>
          <button onClick={(e) => login(e)} className='btn btn-success'>Login</button>
        </form>
      </div>
    </>
  )
}
