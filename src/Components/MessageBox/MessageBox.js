import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Navbar from '../Navbar/Navbar'
import Spinner from '../Utils/Spinner'
import './MessageBox.css'
function MessageBox() {
    let [userState, setUserState] = useState([])
    let [userlen, setuserlen] = useState(1)
    let [page, setpage] = useState(1)
    let [load, setload] = useState(false)
    let [messageModal, setmessageModal] = useState(false)
    let [userinfo, setuserinfo] = useState()
    let fetchuser = async () => {
        try {
            let url = `https://randomuser.me/api/?results=100`
            let { data } = await axios.get(url)
            setUserState(data.results)
            let arr = [data.results.length]
            arr.fill(0)
            setuserlen(arr)
            setuserlen(data.results)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchuser()
    }, [])

    let fetchMoreData = async () => {

        setpage(page + 1)
        setload(true)
        let url = `https://randomuser.me/api/?results=100`
        let { data } = await axios.get(url)
        setload(true)
        setUserState(userState.concat(data.results))
        console.log(data)
    }

    const modalButton = () => {
        setmessageModal(true)
    }
    const userClick = (e) => {
        setuserinfo(e)
        console.log("userinfo", userinfo.picture)
    }
    return (
        <div>
            <Navbar />
            <div className="messageContainer">
                <div className="message my-2 d-flex">
                    <div className="messageShow">

                        <div className="message-wrapper">
                            <h5 className='text-center py-2'>Shivam<span>
                                <i className="fa-solid fa-angle-down mx-3"></i>
                            </span><i className="messagewrite fa-regular fa-pen-to-square" onClick={() => modalButton()}></i></h5>
                            <hr />
                        </div>
                        <div className='user-message '>
                            <InfiniteScroll
                                dataLength={userState.length}
                                next={fetchMoreData}
                                hasMore={userState.length !== 100}
                                loader={<h6><Spinner /></h6>}
                            >

                                {
                                    userState.map((e, i) => {
                                        return (
                                            <div className="user-imgcontainer my-2" key={i} onClick={() => userClick(e)}>

                                                <img src={e.picture.large} className='user-Img' alt="" />

                                                <div className="user-info">
                                                    <span className='mx-2'>{e.name.first} {e.name.last}</span>
                                                    <span className='mx-2'>message</span>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </InfiniteScroll>


                        </div>
                    </div>

                    {
                        userinfo &&
                        <div className="user-messageimgcontainer">

                            <div className="user-message-imgcontainer d-flex ">
                            <img src={userinfo.picture.large} className='user-info-Img mx-2 my-2' alt="" />
                            <div className="user-message-info ">
                                <span className='mx-2'>{userinfo.name.first}</span>
                                <span className='mx-2'>message</span>
                            </div>
                            </div>
                            <div className="message-util ">

                            <i className="fa-solid fa-phone"></i>
                            <i className="far fa-solid fa-video"></i>
                            <i className="far fa-solid fa-info-circle"></i>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default MessageBox
