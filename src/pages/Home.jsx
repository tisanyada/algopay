/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { Link } from "react-router-dom"



const Home = () => {
    return (
        <>
            <header className="header-global mb-2">
                <Navbar />
            </header>
            <main>
                <section className="section-header overflow-hidden pt-7 pt-lg-8 pb-4 pb-lg-4 bg-primary text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="fw-bolder">Algo Pay</h1>
                                <h2 className="lead fw-normal text-muted mb-5">Algo Pay is a platform for students to pay school dues via the algorand blockchain</h2>
                                <div className="d-flex align-items-center justify-content-center mb-5">
                                    <Link to="/docs" className="btn btn-secondary d-inline-flex align-items-center me-4">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"></path></svg>
                                        Documentation
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2"><svg className="home-pattern" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4"><path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path></svg></figure>
                </section>
                <section className="section section-sm pt-0 mt-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5 mb-lg-6">
                            <div className="col-12 text-center">
                                <h2 className="h1 px-lg-5">Outline of some pages</h2>
                                <p className="lead px-lg-10">Every page from algo pay has been carefully built to provide all the necessary pages your institution will require</p>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-6 mb-5">
                                <Link to="./pages/transactions.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/transactions.jpg"} alt="Transactions page preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">Transactions <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 mb-5">
                                <Link to="./pages/settings.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/settings.jpg"} alt="Settings page preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">Settings <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 mb-5">
                                <Link to="./pages/examples/sign-in.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/sign-in.jpg"} alt="Sign In page preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">Sign In <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 mb-5">
                                <Link to="./pages/examples/sign-up.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/sign-up.jpg"} alt="Sign Up page preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">Sign Up <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 mb-5">
                                <Link to="./pages/examples/forgot-password.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/forgot-password.jpg"} alt="Forgot password preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">Forgot password <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 mb-5">
                                <Link to="./pages/examples/reset-password.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/reset-password.jpg"} alt="Reset password preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">Reset password <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 mb-5">
                                <Link to="./pages/examples/404.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/404.jpg"} alt="404 error preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">404 <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 mb-5">
                                <Link to="./pages/examples/500.html" className="page-preview scale-up-2">
                                    <img className="shadow-lg rounded scale" src={process.env.PUBLIC_URL + "/assets/img/pages/500.jpg"} alt="500 error preview" />
                                    <div className="text-center show-on-hover rounded-bottom">
                                        <h6 className="m-0 text-center d-inline-flex align-items-center text-white">500 <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg></h6>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-lg bg-gray-800 text-white">
                    <div className="container">
                        <div className="row justify-content-center mb-5 mb-lg-6">
                            <div className="col-12 text-center">
                                <h2 className="h1 px-lg-5">Features of Algo Pay</h2>
                                {/* <p className="lead px-lg-8">You get all Bootstrap components fully customized. Besides, you receive numerous plugins out of the box and ready to use.</p> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                    <div className="px-3 px-lg-4 py-5 text-center">
                                        <svg className="icon icon-md mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                        <h5 className="fw-bold text-primary">Creative rights</h5>
                                        <p className="mb-0 text-gray-600">All components are licensed & free to use</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                    <div className="px-3 px-lg-4 py-5 text-center">
                                        <svg className="icon icon-md mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
                                        <h5 className="fw-bold text-primary">Documentation</h5>
                                        <p className="mb-0 text-gray-600">Everything that comes is well documented</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                    <div className="px-3 px-lg-4 py-5 text-center">
                                        <svg className="icon icon-md mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                        <h5 className="fw-bold text-primary">Calendar</h5>
                                        <p className="mb-0 text-gray-600">Advanced integration with FullCalendar.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home
