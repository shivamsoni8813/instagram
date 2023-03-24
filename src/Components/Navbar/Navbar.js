import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import DataContext from '../Context/DataContext'
import search from '../Search/SearchModal'
import SearchModal from '../Search/SearchModal'
import axios from 'axios'
import Spinner from '../Utils/Spinner'

function Navbar() {
    let [state, setstate] = useState(false)
    let [search, setsearch] = useState(false)
    let [modals, setmodals] = useState("nomodal")
    let [customerData, setCustomerData] = useState([])
    let [filterData, setFilterData] = useState([])
    let [load, setLoad] = useState(false)
    let [notification, setNotification] = useState([])

    let clickModal = () => {
        setstate(true)
        setmodals("modal")
    }

    let searchclick = () => {
        setsearch(true)
    }

    let searchResults = async () => {
        try {
            setLoad(true)
            let url = "https://randomuser.me/api/?results=500"
            let { data } = await axios.get(url)
            console.log(data.results)
            setCustomerData(data.results)
            setFilterData(data.results)
            setLoad(false)
        } catch (e) {
            console.log(e)
        }
    }

    let handleSearch = (el) => {
        if (!el || el.length == 0) {
            setFilterData(customerData)
        }
        else {
            let res = customerData.filter((e) => {
                return e.name.first.toUpperCase().includes(el.toUpperCase())
            })
            setFilterData([...res])
        }

    }

    useEffect(() => {
        searchResults()
    }, [])

    return (
        <div>
            <div className="navbar-container fixed-top ">
                <nav className="navbar">
                    <div className="navbar-content">
                        <div className="navbar-detail">
                            <div className="navbar-header">
                                <h3 className='navbar-heading'>instagram</h3>
                            </div>
                        </div>
                        <div className="nabar-info">
                            <div className="navbar-options">
                                <ul className='navbar-list'>
                                    <Link to="/" className='icon'><li className='homePage'><i className=" fas fa-home-lg-alt"></i>Home</li></Link>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={() => searchclick()}><i className="fas fa-search"></i>Search</li>
                                    <Link to='/Explore'><li className='text-white'><i className="fa-brands fa-wpexplorer text-white"></i>Explore</li></Link>
                                    <Link to='/Message'><li className='text-white'><i className="fa-brands fa-facebook-messenger"></i>Messages</li></Link>
                                    <Link to='/Reels'><li className='text-white'><i className="fa-solid fa-camera-retro"></i>Reels</li></Link>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='text-white'><i className="fa-regular fa-heart"></i>Notifications</li>
                                    <li data-bs-toggle={modals} data-bs-target="#exampleModal" onClick={() => clickModal()}><i className="fa-regular fa-square-plus"  ></i>Create</li>
                                    <li><i className="profile fa-regular"></i>Profile</li>
                                    <Link to="/Logout"><li><i className="fa-regular fa-circle"></i>Logout</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {
                state ? <div className="maodalBox">
                    <div className="modal fade" id="exampleModal" tabIndex="-1" defaultValue={"modal"} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input type="file" placeholder='choose from computer' />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""
            }

            {
                search ? <div className="offcanvas offcanvas-start bg-black" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-secondary " id="offcanvasExampleLabel">Search</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body search-conatainer">
                        <div className="searchValues fixed-top">

                            <input type="search" placeholder='search...' onInput={(e) => handleSearch(e.target.value)} className="form-control bg-white text-black " id="exampleInputsearch1" aria-describedby="searchHelp" />
                        </div>

                        <div className="searchSpace">
                            {load && <Spinner />}
                            {
                                filterData.map((e, i) => {
                                    return (
                                        <div className="serach-result  bg-black text-white my-4" key={i}>
                                            <div className="searchImg">

                                                <img src={e.picture.medium} className='searchUserImg' alt="" />
                                                <div className="searchInfo mx-3">
                                                    <span className='userName '>{e.name.first}</span>
                                                    <span className='userMsg'>{e.name.last}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
                    : ""
            }

            {notification ?
                <div className="notify">

                    <div className="offcanvas offcanvas-start bg-black" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

                        <div class="offcanvas-header">
                            <h5 className="offcanvas-title text-bg-secondary bg-black" id="offcanvasExampleLabel">Notification</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body search-conatainer">


                            <div className="notification">
                                {load && <Spinner />}
                                {
                                    filterData.map((e, i) => {
                                        return (
                                            <div className="serach-result  bg-black text-white my-4" key={i}>
                                                <div className="searchImg">

                                                    <img src={e.picture.medium} className='searchUserImg' alt="" />
                                                    <div className="searchInfo mx-3">
                                                        <span className='userName '>{e.name.first}</span>
                                                        <span className='userMsg'>{e.name.last}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    </div>
                </div>
                : ""
            }

        </div>

    )
}

export default Navbar
