import React from 'react'
import Auth from './Components/Auth/Auth'
import Navbar from './Components/Navbar/Navbar'
import Approuter from './Components/Router/Approuter'
import './App.css'
import ContextState from './Components/Context/ContextState'
function App() {
  return (
    <div className="Appcontainer">

        <ContextState>
        {/* <Navbar/>  */}
        {/* <Auth/> */}
        <Approuter/>
        </ContextState>
        
    </div>
   
  
  )
}

export default App
