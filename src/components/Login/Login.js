import React, { useState } from 'react'
import "./Login.css"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from '../../redux/action-creators/action';

const Login_Signup = () => {

    const navigate = useNavigate();
    function login(e) {
        e.preventDefault();
        dispatch(signIn(navigate, signin))

    }
    const [signin, setSignIn] = useState({
        email: '',
        password: ''
    })
    const signInChange = (e) => {
        const { name, value } = e.target
        setSignIn({ ...signin, [name]: value })
    }
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card my-5">

                        <form className="card-body cardbody-color p-lg-5">

                            <div className="text-center">
                                <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                    width="160px" alt="profile" />
                            </div>

                            <div className="mb-3">
                                <input value={signin.email} name='email' onChange={signInChange} type="email" className="form-control" id="Username" aria-describedby="emailHelp"
                                    placeholder="abcd@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <input value={signin.password} name='password' onChange={signInChange} type="password" className="form-control" id="password" placeholder="password" />
                            </div>
                            <div className="text-center"><button onClick={login} type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
                            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                                Registered? <a href="/" className="text-dark fw-bold"> Create an
                                    Account</a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login_Signup
