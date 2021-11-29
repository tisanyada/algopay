/* eslint-disable jsx-a11y/anchor-has-content */

import { Link } from "react-router-dom"



const Navbar = ({ bg }) => {
    return (
        <nav
            id="navbar-main"
            aria-label="Primary navigation"
            className={`navbar navbar-main navbar-expand-lg bg-${bg ? bg : 'primary'} pt-4 navbar-dark`}
        >
            <div className="container position-relative">
                <div className="navbar-collapse collapse me-auto" id="navbar_global">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <Link to="./index.html">
                                    <img src="./assets/img/brand/light.svg" alt="Algo pay logo" />
                                </Link>
                            </div>
                            <div>
                                <div className="col-6 collapse-close">
                                    <Link to="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-auto">
                        <ul className="navbar-nav navbar-nav-hover align-items-lg-center me-md-3">
                            <li className="nav-item me-2">
                                <Link to="/signin" className="nav-link">Signin</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/signup" className="nav-link">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
