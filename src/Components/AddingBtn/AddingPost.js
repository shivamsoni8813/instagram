import React, { useContext, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import './AddingPost.css'
import DataContext from '../Context/DataContext'
export default function AddingPost() {
    let {modal} = useContext(DataContext)
    
  
    return (
    <>
        <div className='addingContainer'>
            <Navbar/>
            
           
        </div>
    </>
    )
}
