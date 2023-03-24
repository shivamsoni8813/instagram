import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Navbar from '../Navbar/Navbar'
import Spinner from '../Utils/Spinner'
import Picker from 'emoji-picker-react';
import './MessageBox.css'
function MessageBox() {
    let [userState, setUserState] = useState([])
    let [userlen, setuserlen] = useState(1)
    let [page, setpage] = useState(1)
    let [load, setload] = useState(false)
    let [messageModal, setmessageModal] = useState(false)
    let [userinfo, setuserinfo] = useState()
    let [chosenEmoji, setChosenEmoji] = useState(null);
    let [show, setShow] = useState(false)
    let [sendBtnShw, setSendBtnShow] = useState(false)
    let [messagText, setMessageText]=useState("")
    let [showCard, setShowCard] = useState(false)
    let [clickValue, setClickValue] = useState([])
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
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

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
        setmessageModal(!messageModal)
    }
    const userClick = (e) => {
        setuserinfo(e)
        console.log("userinfo", userinfo.picture)
    }

    let emaojiShow = () => {
        setShow(!show)
    }
    let handleMessageChange = (e) => {
        setSendBtnShow(true)
        setMessageText(e.target.value)
    }
    let sendMessageToPerson=()=>{
        setClickValue(messagText)
        setShowCard(true)
        setSendBtnShow(false)
    }
    console.log(clickValue)
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
                    <div className='display-message'>

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
{/* 
                        {  
                            clickValue.map((item)=>{
                                return(
                            <div className="card text-bg-dark mb-3" style={{maxWidth: "18rem"}}>
                            <div className="card-body">
                              <p className="card-text">{item}</p>
                            </div>
                             </div>
                                )
                            }) 
                        } */}
                        
                        {

                            <div className="message-box-container">
                                <div className="emoji-box">
                                    {
                                        show && <div className='emoji-pickar'>
                                            <Picker onEmojiClick={onEmojiClick} width="20rem" height="20rem" />
                                            {chosenEmoji ? (
                                                <span >You chose:{chosenEmoji.emoji}</span>
                                            ) : ""
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        }

                        {userinfo ?
                            <div className="add-box">
                                <i className="fa-regular fa-face-smile editIconShow" onClick={() => emaojiShow()} ></i>
                                <input type="text" placeholder='message...' onChange={(e) => handleMessageChange(e)} className='messageTextArea' />
                                {
                                    sendBtnShw ?
                                        <>
                                            <button className='btn btn-primary' onClick={()=>sendMessageToPerson()}>Send</button>

                                        </>
                                        :
                                        <>
                                            <span className="material-icons">add_photo_alternate</span>
                                            <span className="material-icons">favorite_border</span>
                                        </>

                                }
                            </div> :
                            <div className='messageSendIcon'>
                                <span className="material-icons messageSend">send</span>
                                <h1 className='messageSendMsg'>Your Messages</h1>
                                <p className='messageSendMsgInfo'>Send private photos and messages to a friend or group</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox
