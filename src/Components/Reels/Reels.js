import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar.js'
import video from '../Video/f1.mp4'
import "./Reels.css"
function Reels() {
  let [playPause, setPlayPause] = useState(false)
  let [heart , setHeart] = useState(false)
  let ref = useRef()
  let pauseClick = ()=>{
    setPlayPause(!playPause)
    if (playPause) {
      ref.current.pause()
    }else{
      ref.current.play()
    }
  } 

  let turnRed = ()=>{
    setHeart(!heart)
  } 
   return (
    <div>
      <Navbar/>
        <div className="reels">
          <div className="reelsVideo">
            <video src={video} className="iframe" ref={ref}  onClick={()=>pauseClick()} autoPlay loop ></video>
            {
              !playPause ?
              <span class="material-icons playBtn" onClick={()=>pauseClick()}>play_circle</span>
              :""
            }
            <div className="groupOfItem">
                <img className={heart ?'heart-Img' : "noHeart"} onClick={()=>turnRed()} alt="" />
                <p className="material-icons commentIcon">maps_ugc</p>
                <span className="material-icons sendIcon">send</span>
                <span class="material-icons tagIcon">bookmark_border</span>
                <span class="material-icons infoIcon">info</span>
                <img src="https://randomuser.me/api/portraits/women/24.jpg" className='userReelImg' alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reels
