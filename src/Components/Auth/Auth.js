import React from 'react'
import instaLogin from '../images/instaLogin.png'
import './Auth.css'

function Auth() {
    
    return (

        <div>
            <div className="login-container">
                <div className="login-wrapper">
                    <div className="left">
                        <div className="imgage">
                            <img src={instaLogin} alt="" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="info-wrapper">

                            <div className="mid-wrapper">
                                <h2>instagram</h2>
                            </div>
                            <div className="login-form">
                                <div className="login-inputs">
                                    <form>
                                        <div class="mb-3">
                                            <input type="email" class="form-control" placeholder='username,email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <input type="password" class="form-control" placeholder='password' id="exampleInputPassword1" />
                                        </div>

                                        <button type="button" class="Loginbtn btn-primary">Log in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                            <div className="signup">
                                <div className="for-signup">
                                    <div className="signup-wrapper">
                                        Don't have account ? <button className='signupbtn btn-primary'>SignUp</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
