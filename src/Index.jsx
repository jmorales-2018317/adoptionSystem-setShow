import React, {createContext, useState, useEffect} from 'react'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import { AddAnimal } from './pages/AddAnimal'
import { HomePage } from './pages/HomePage/HomePage'
import { AnimalsPage } from './pages/AnimalsPage'
import { RegisterPage } from './pages/RegisterPage'
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { UsersPage } from './pages/UsersPage'
import { AppointmentPage } from './pages/AppointmentPage'

export const AuthContext = createContext();

//ESTE COMPONTE SIRVE PARA CREAR EL ENRUTADOR Y AL MISMO PASARLE UN CONTEXTO (SERIE DE DATOS, OBJETOS, STRINGS, ARRAYS)
export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [dataUser, setDataUser] = useState({
      name: '',
      username: '',
      role: ''
    })

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token) setLoggedIn(true)
    }, [])

    const routes = createBrowserRouter([
        {
          path: '/',
          element: <App/>,
          errorElement: <NotFoundPage/>,
          children: [
            {
              path: '/',
              element: <HomePage/>
            },
            {
              path: '/register',
              element: <RegisterPage></RegisterPage>
            },
            {
              path: '/login',
              element: <LoginPage></LoginPage>
            },
            {
              path: '/dashboard',
              element: loggedIn ? <DashboardPage/> : <LoginPage/>,
              children: [
                {
                  path: 'animals',
                  element: <AnimalsPage/>
                },
                {
                  path: 'users',
                  element: <UsersPage/>
                },
                {
                  path: 'appointments',
                  element: <AppointmentPage/>
                }
              ]
            }
          ]
        }
      ])

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
