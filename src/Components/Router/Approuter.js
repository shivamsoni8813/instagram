import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddingPost from '../AddingBtn/AddingPost'
import Auth from '../Auth/Auth'
import Explore from '../Explore/Explore'
// import LandingPage from '../LandingPage/LandingPage'
import MessageBox from '../MessageBox/MessageBox'
import Reels from '../Reels/Reels'
import SearchModal from '../Search/SearchModal'
import Spinner from '../Utils/Spinner'

let LandingPage = lazy(() => import('../LandingPage/LandingPage'))

function Approuter() {
  return (
    <div>

      <Routes>

        <Route path='/' element={
          <>

            <Suspense fallback={<Spinner />}>

              <LandingPage />

            </Suspense>

          </>}>

        </Route>

        <Route path='/create' element={
          <>

            <Suspense fallback={<Spinner />}>

              <AddingPost />

            </Suspense>

          </>
        }></Route>
        <Route path='/search' element={<SearchModal />}></Route>
        <Route path='/Explore' element={
          <>

            <Suspense fallback={<Spinner />}>

              <Explore />

            </Suspense>

          </>
        }></Route>
        <Route path='/Message' element={
          <>

            <Suspense fallback={<Spinner />}>

              <MessageBox />

            </Suspense>

          </>
        }></Route>
        <Route path='/Logout' element={
          <>
          <Suspense>
            <Auth/>
          </Suspense>
          </>
        }></Route>

        <Route path='/Reels' element={<Reels/>}></Route>
      </Routes>
    </div>
  )
}

export default Approuter
