import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'

function App() {

  const {user, isLoaded, isSignedIn} = useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth/sign-in'}/>
  }

  return (
    <>     
    <Header/>  
    <Outlet/>     {/*Wrap multiple child routes in a common layout*/}
      
    </>
  )
}

export default App
