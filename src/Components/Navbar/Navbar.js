import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import DataContext from '../Context/DataContext'
import search from '../Search/SearchModal'
import SearchModal from '../Search/SearchModal'

function Navbar() {
    let [state, setstate] = useState(false)
    let [search, setsearch] = useState(false)
    let [modals, setmodals] = useState("nomodal")

    let clickModal = () => {
        setstate(true)
        setmodals("modal")
    }

    let searchclick = () => {
        setsearch(true)
    }

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
                                    <Link to='/Explore'><li><i className="fa-brands fa-wpexplorer"></i>Explore</li></Link>
                                    <Link to='/Message'><li><i className="fa-brands fa-facebook-messenger"></i>Messages</li></Link>
                                    <Link to='/Reels'><li><i className="fa-solid fa-camera-retro"></i>Reels</li></Link>
                                    <Link to=""><li><i className="fa-regular fa-heart"></i>Notifications</li></Link>
                                    <li data-bs-toggle={modals} data-bs-target="#exampleModal" onClick={() => clickModal()}><i className="fa-regular fa-square-plus"  ></i>Create</li>
                                    <li><i className="fa-regular fa-circle"></i>Profile</li>
                                    <div className="btn-group dropup">
                                        <li className="dropli btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropup
                                        </li>
                                        <ul className="dropdown-menu bg-dark text-bg-primary">
                                            <li>Logout</li>
                                        </ul>
                                    </div>
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
                search ? <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-bg-secondary bg-dark" id="offcanvasExampleLabel">Search</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <input type="search" className="form-control bg-dark text-bg-secondary "  id="exampleInputsearch1" aria-describedby="searchHelp"/>
                    </div>
                    
                </div> : ""
            }
        </div>

    )
}

export default Navbar
