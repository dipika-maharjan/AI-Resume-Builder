import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SigninPage from './auth/sign-in'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
  {
    element:<App/>, //parent route
    children:[
      {
        path:'/',
        element:<Home/> //child route
      },
      {
        path:'/dashboard',
        element:<Dashboard/> //child route
      }
    ]
  },
  {
    path:'/auth/sign-in',
    element:<SigninPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
