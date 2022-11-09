import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">

                <div className="container">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarButtonsExample">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="navbar-brand" href="/">Dashboard</a>
                            </li>
                        </ul>


                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-success me-3">
                                <Link className='text-light' to="/login">Login</Link>
                            </button>
                            <button type="button" className="btn btn-success me-3">
                                <Link className='text-light' to="/signup">Sign up</Link>
                            </button>
                            <a
                                className="btn btn-dark px-3"
                                role="button"
                                href='/'
                            ><i className="fab fa-github"></i
                            ></a>
                        </div>
                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Navbar
