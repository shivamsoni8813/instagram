import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './LandingPage.css'
function LandingPage() {

  let [user, setuser] = useState([])
  let [heart,setheart]=useState()

  let userCall = async () => {
    try {
      let url = 'https://dummyjson.com/users'
      let { data } = await axios.get(url)
      setuser(data.users)
      console.log(data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    userCall()
  }, [])

  let heartClick = (e) => {
    setheart()
  }
  return (
    <div className='LandingPage bg-black text-bg-secondary mx-2'>
      <Navbar />
      <div className="userNavbar text-center ">
        <div className="userNavInfo">
          <div className="row">
            {
              user && user.slice(0, 10).map((e) => {
                return (
                  <div className="col-md-1" key={e.id}>

                    <div className="userNavImg ">
                      <ul>

                        <li><img src={e.image} className='userNavPic my-4' alt="..." /></li>
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="usercontainer">
        <div className="userposts">
          {
            user && user.map((e) => {
              return (

                <div className="card my-2" key={e.id} style={{ width: "19rem", border: "none", borderBottom: "1px solid grey" }}>
                  <div className="userinfo d-flex align-items-center bg-black text-bg-secoundry text-center">
                    <img src={e.image} className='userPic bg-black text-bg-secondary my-3' alt="..." />
                    <h5 className="card-title mx-3 bg-black text-bg-secoundry">{e.firstName}</h5>
                  </div>
                  <img src={e.image} className="DetailPic bg-black text-bg-secoundry" alt="..." />
                  <div className="card-body bg-black text-bg-secoundry">
                    <p className="card-text">
                      {<i onClick={()=>heartClick(e.id)}></i>}
                       <i className="fa-regular fa-comment "></i>
                       <i className="fal fa-share"></i></p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default LandingPage
