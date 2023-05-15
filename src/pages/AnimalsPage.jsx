import React, { useEffect, useState } from 'react'
import { LoginPage } from './LoginPage'
import { Card } from '../components/Card'
import axios from 'axios'

export const AnimalsPage = () => {
  const [animals, setAnimals] = useState([{}])
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getAnimals = async()=>{
    try{
      const { data } = await axios('http://localhost:2651/animal/get', {headers: headers})
      if(data.animals){
        setAnimals(data.animals)
        console.log(data.animals)
      }
    }catch(err){
      console.log(err)
      throw new Error('Error getting animals')
    }
  }

  useEffect(()=> getAnimals,[])

  return (
    <>
      <main>
        <div className="left binding color">
          <h1> 
            <i className="fa-solid fa-hippo"></i>
            | CONTROL ANIMALS
          </h1>
        </div>
        <div className='row g-0 justify-content-center'>
        {
          animals.map(({name, description, age}, i)=>{
            return(
              <Card 
                key={i}
                title={name}
                description={description}
                age={age}
                >
              </Card>
            )
          })
        }
        </div>
      </main>
    </>
  )
}
