import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from '../../redux/action-creators/action';


const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [signup, setSignUp] = useState({
        name: '',
        email: '',
        password: ''
    })
    console.log(signup);
    const signUpChange = (e) => {
        const { name, value } = e.target
        setSignUp({ ...signup, [name]: value })
    }
    function SignUp(e) {
        e.preventDefault();
        dispatch(signUp(signup))

    }

    return (
        <div>
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
                                    <input value={signup.name} name='name' onChange={signUpChange} type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                                        placeholder="User Name" />
                                </div>
                                <div className="mb-3">
                                    <input value={signup.email} name='email' onChange={signUpChange} type="email" className="form-control" id="Username" aria-describedby="emailHelp"
                                        placeholder="email" />
                                </div>
                                <div className="mb-3">
                                    <input value={signup.password} name='password' onChange={signUpChange} type="password" className="form-control" id="password" placeholder="password" />
                                </div>
                                <div className="text-center"><button onClick={SignUp} type="submit" className="btn btn-color px-5 mb-5 w-100">SignUp</button></div>
                                <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already
                                    have an account? <a href="/" className="text-dark fw-bold">Login here</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
