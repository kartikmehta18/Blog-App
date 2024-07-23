import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import './App.css'
import { Login, logout } from './store/authSlice'
import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'

function App() {
 const [loading, setLoading]= useState(true)
 const dispatch = useDispatch();

 useEffect(() => {
   authService.getCurrentUser()
   .then((userData) =>{
    if (userData) {
      dispatch(Login({userData}))
    }else{
      dispatch(logout())
    }
   })
   .finally(()=> setLoading(false))
 }, [])
 
  return ! loading ? (
    <>
     <div className='min-h-screen flex flex-wrap
      content-between bg-gray-400'>
        <div className='w-full block text-center'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
        </div>
      </div>
    </>
  ) : null
}

export default App
