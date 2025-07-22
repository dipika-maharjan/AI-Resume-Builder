import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>        
    <Outlet/>     {/*Wrap multiple child routes in a common layout*/}
      
    </>
  )
}

export default App
