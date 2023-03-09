import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Spinner from '../Utils/Spinner'
import './LandingPage.css'
function LandingPage() {

  let [user, setuser] = useState([])
  let [heart, setheart] = useState()
  let [loading, setloading] = useState(false)

  let userCall = async () => {
    try {
      setloading(true)
      let url = 'https://randomuser.me/api/?results=100'
      let { data } = await axios.get(url)
      console.log(data.results)
      setuser(data.results)
      console.log(data.users)
      setloading(false)
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
    <div className="userCon d-flex">

      <div className='LandingPage bg-black text-bg-secondary mx-2'>
        <Navbar />
        <div className="userNavbar ">
          {loading && <Spinner />}
          <div className="nav-img">
            <div className="nav-user d-flex">
              {
                user.map((e, i) => {
                  return (
                    <div className='picture-container' key={i}>

                      <img className='user-Picture mx-2' src={e.picture.large} alt="" />
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
              user && user.map((e, i) => {
                return (

                  <div className="card my-2" key={i} style={{ width: "19rem", border: "none" }}>
                    <div className="userinfo d-flex align-items-center bg-black text-bg-secoundry text-center">
                      <img src={e.picture.large} className='userPic bg-black text-bg-secondary my-3' alt="..." />
                      <h5 className="card-title mx-3 bg-black text-bg-secoundry">{e.name.first}</h5>
                    </div>
                    <p className="card-text sign-text">
                      <img src={e.picture.medium
                      } className="DetailPic bg-black text-bg-secoundry" alt="..." />
                      <div className="card-body bg-black text-bg-secoundry">
                        {<i className="fa-regular fa-heart " onClick={() => heartClick(e.id)}></i>}
                        <i className="fa-regular fa-comment "></i>
                        <i className="fal fa-solid fa-share"></i>
                      </div>
                    </p>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>
      <div className="pro">
        <div className='picture-container' >

          <img className='user-Picture mx-2' src="	https://randomuser.me/api/portraits/women/24.jpg" alt="" />
          <div className="proinfo">
            <span>ShivamSoni8813</span>
            <span>Shivam Soni</span>
          </div>
          <div className="switch">
              <span>Switch</span>
            </div>
        </div>
        <div className="suggestion">
            <div className="suggestionHeader">

          <h6>Suggestion for you</h6><span>See All</span>
            </div>
          <div className="userinfo d-flex align-items-center bg-black text-bg-secoundry">
            <img src="https://randomuser.me/api/portraits/women/24.jpg" className='userPic bg-black text-bg-secondary my-3' alt="..." />
            <div className="suggestPerson">
            <span>shivam</span>
            <p>New to suggestion</p>
            </div>
            <div className="follow">
              <span>Follow</span>
            </div>
          </div>
          <div className="userinfo d-flex align-items-center bg-black text-bg-secoundry">
            <img src="https://randomuser.me/api/portraits/med/men/27.jpg" className='userPic bg-black text-bg-secondary my-3' alt="..." />
            <div className="suggestPerson">
            <span>sofi</span>
            <p>New to suggestion</p>
            </div>
            <div className="follow">
              <span>Follow</span>
            </div>
          </div>
          <div className="userinfo d-flex align-items-center bg-black text-bg-secoundry">
            <img src="https://randomuser.me/api/portraits/med/women/9.jpg" className='userPic bg-black text-bg-secondary my-3' alt="..." />
            <div className="suggestPerson">
            <span>sofia</span>
            <p>New to suggestion</p>
            </div>
            <div className="follow">
              <span>Follow</span>
            </div>
          </div>
          <div className="userinfo d-flex align-items-center bg-black text-bg-secoundry">
            <img src="https://randomuser.me/api/portraits/med/women/52.jpg" className='userPic bg-black text-bg-secondary my-3' alt="..." />
            <div className="suggestPerson">
            <span>Kadia</span>
            <p>New to suggestion</p>
            </div>
            <div className="follow">
              <span>Follow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
