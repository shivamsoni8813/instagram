import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels'
import Navbar from '../Navbar/Navbar';
import "./Explore.css"
function Explore() {

    let [pageVideo, setpageVideo] = useState([])
    let [imgModal, setImgModal] = useState(false)
    let [modals, setmodals] = useState("nomodal")
    let [modalimg, setmodalimg] = useState("")

    const client = createClient('G0vOjVznNK86XoXMO2i595dPAPAj59toG0oNRXjS1j4k3ByrJDHGu0nu');
    let fetchVideo = async () => {
        try {
            let { videos } = await client.videos.popular()
            console.log(videos)

            setpageVideo(videos)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchVideo()
    }, [])

    let handleExplore = (e) => {
        console.log("click")
        setImgModal(true)
        setmodals("modal")
        setmodalimg(e)
    }

    return (<>
        <div className='explore container bg-black'>
            <Navbar />
            <div className="Explore-container bg-black">
                <div className="row">
                    {
                        pageVideo.map((element) => {
                            return (
                                <div className="col-md-3 bg-black" key={element.id}>

                                    <div className="card text-center bg-black" style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <img src={element.image} width="200" data-bs-toggle={modals} data-bs-target="#exampleModal" height="400" onClick={() => handleExplore(element.image)} className='object-fit-xxl-contain border rounded cardImg' alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
        {imgModal == true ? <div className="modal-dialog modal-dialog-scrollable ">
            <div className="modal fade" id="exampleModal" tabIndex="-1" defaultValue={"modal"} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  " style={{width : "40rem"}}>
                    <div className="modal-content  bg-black text-bg-secoundry">

                        <div className="modal-header bg-black text-bg-secoundry">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
                            <button type="button" className="btn-close bg-white text-bg-secoundry" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-content bg-black text-bg-white" >
                            <img src={modalimg} alt="" />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> : ""
        }
    </>
    )
}

export default Explore
