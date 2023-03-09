import React, { lazy, Suspense } from 'react'
import Auth from './Components/Auth/Auth'
import Navbar from './Components/Navbar/Navbar'
// import Approuter from './Components/Router/Approuter'
import './App.css'
import ContextState from './Components/Context/ContextState'
import Spinner from './Components/Utils/Spinner';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.css';                      
import 'primeicons/primeicons.css';                                

let Approuter =  lazy(()=>import('./Components/Router/Approuter'))
function App() {
  return (
    <div className="Appcontainer">

        <ContextState>
        {/* <Navbar/>  */}
        {/* <Auth/> */}
        <Suspense fallback={<Spinner/>}>

        <Approuter/>
        </Suspense>
        </ContextState>
        
    </div>
   
  
  )
}

export default App
