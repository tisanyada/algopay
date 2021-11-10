import { Link } from "react-router-dom"



const Footer = () => {
    return (
        <footer className="footer py-6 bg-gray-800 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="navbar-brand-dark mb-4" height="35" src="./assets/img/brand/light.svg" alt="Logo light" />
                        <p>Algo Pay is a platform for students to pay school dues via the algorand blockchain</p>
                    </div>
                    <div className="col-6 col-md-2 mb-5 mb-lg-0">
                        <span className="h5">Algo Pay</span>
                        <ul className="links-vertical mt-2">
                            <li><Link target="_blank" to="#">Blog</Link></li>
                            <li><Link target="_blank" to="#">About Us</Link></li>
                            <li><Link target="_blank" to="#  ">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-5 mb-lg-0">
                        <span className="h5">Other</span>
                        <ul className="links-vertical mt-2">
                            <li>
                                <Link to="#" target="_blank">Docs
                                    <span className="badge badge-sm bg-secondary text-dark ms-2">v1.0</span>
                                </Link>
                            </li>
                            <li>
                                <Link target="_blank" to="https://themesberg.com/licensing">License</Link>
                            </li>
                            <li>
                                <Link target="_blank" to="https://themesberg.com/contact">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mb-5 mb-lg-0">
                        <span className="h5 mb-3 d-block">Subscribe</span>
                        <form action="#">
                            <div className="form-row mb-2">
                                <div className="col-12">
                                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                                </div>
                                <div className="col-12 d-grid">
                                    <button type="submit" className="btn btn-secondary" data-loading-text="Sending">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className="text-muted font-small m-0">We’ll never share your details. See our <Link className="text-white" to="#">Privacy Policy</Link></p>
                    </div>
                </div>
                <hr className="bg-gray-700 my-5" />
                <div className="row">
                    <div className="col mb-md-0">
                        <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                            <p className="fw-normal font-small mb-0">Copyright © Algo Pay 2021-<span className="current-year">2021</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
