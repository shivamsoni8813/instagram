import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddingPost from '../AddingBtn/AddingPost'
import Explore from '../Explore/Explore'
import LandingPage from '../LandingPage/LandingPage'
import MessageBox from '../MessageBox/MessageBox'
import SearchModal from '../Search/SearchModal'
function Approuter() {
  return (
    <div>
         {/* <Navbar/> */}
      <Routes>
        <Route path='/' element ={<LandingPage/>}></Route>
        <Route path='/create' element={<AddingPost/>}></Route>
        <Route path='/search' element={<SearchModal/>}></Route>
        <Route path='/Explore' element={<Explore/>}></Route>
        <Route path='/Message' element={<MessageBox/>}></Route>
      </Routes> 
    </div>
  )
}

export default Approuter
