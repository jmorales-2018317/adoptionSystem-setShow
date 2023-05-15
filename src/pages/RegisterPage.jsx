import React, { useState } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        password: '',
        email: '',
        phone: ''
    })

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const register = async(e)=>{
        try{
            e.preventDefault()
            const { data } = await axios.post('http://localhost:2651/user/register', form)
            if(data.message){
                alert(data.message)
                navigate('/login')
            }
        }catch(err){
            alert(err.response.data.message)
            throw new Error('Error registering user')
        }
    }


  return (
    <>
        <Navbar></Navbar>
        <div className="container">
        <h3 className='text-center'>Sign Up</h3>
          <form className='m-5 text-center '>
              <div className='mb-3'>
                  <label className='form-label'>name</label>
                  <input onChange={handleChange} name='name' className='form-control' type="text" />
              </div>
              <div className='mb-3'>
                  <label className='form-label' htmlFor="">surname</label>
                  <input onChange={handleChange} name='surname' className='form-control' type="text" />
              </div>
              <div className='mb-3'>
                  <label className='form-label' htmlFor="">username</label>
                  <input onChange={handleChange} name='username' className='form-control' type="text" />
              </div>
              <div className='mb-3'>
                  <label className='form-label' htmlFor="">password</label>
                  <input onChange={handleChange} name='password' className='form-control' type="text" />
              </div>
              <div className='mb-3'>
                  <label className='form-label' htmlFor="">email</label>
                  <input onChange={handleChange} name='email' className='form-control' type="text" />
              </div>
              <div className='mb-3'>
                  <label className='form-label' htmlFor="">phone</label>
                  <input onChange={handleChange} name='phone' className='form-control' type="text" />
              </div>
            <button onClick={(e)=> register(e)} className='btn btn-primary'>
                Sign Up
            </button>
          </form>
      </div>
    </>
  )
}
