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
                <section className="section-header overflow-hidden pt-5 pt-lg-8 pb-4 pb-lg-4 bg-primary text-white">
                    <div className="container">
                        <div className="row">
                            <Link to="/signin" className="signin-link text-center col-3 ml-auto">Signin</Link>
                            <Link to="/signup" className="signin-link text-center col-3 ms-auto">Signup</Link>

                            <div className="col-12 text-center">
                                <h1 className="fw-bolder">Algo Pay</h1>
                                <h2 className="lead fw-normal text-muted mb-5">Algo Pay is a platform for students to pay school dues via the algorand blockchain</h2>
                                <div className="d-flex align-items-center justify-content-center mb-5">
                                    <Link to="/docs" className="btn btn-secondary d-inline-flex align-items-center me-4">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/icons/document.svg"} className="icon icon-xs me-2" alt="doc" />
                                        Documentation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2"><svg className="home-pattern" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4"><path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path></svg></figure>
                </section>
                <section className="section section-lg bg-light text-dark mt-2">
                    <div className="container">
                        <div className="row justify-content-center mb-5 mb-lg-6">
                            <div className="col-12 text-center">
                                <h2 className="h1 px-lg-5">Features of Algo Pay</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                    <div className="px-3 px-lg-4 py-5 text-center">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/icons/speed.svg"} className="icon icon-md mb-3" alt="speed" />
                                        <h5 className="fw-bold text-primary">Faster Transactions</h5>
                                        <p className="mb-0 text-gray-600">Get at least 5second transaction completion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                    <div className="px-3 px-lg-4 py-5 text-center">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/icons/transaction.svg"} className="icon icon-md mb-3" alt="trans logo" />
                                        <h5 className="fw-bold text-primary">Low Transaction Fees</h5>
                                        <p className="mb-0 text-gray-600">Very low transaction fee for every transaction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                    <div className="px-3 px-lg-4 py-5 text-center">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/icons/verify.svg"} className="icon icon-md mb-3" alt="trans logo" />
                                        <h5 className="fw-bold text-primary">Payment Verification</h5>
                                        <p className="mb-0 text-gray-600">Very low transaction fee for every transaction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                                    <div className="px-3 px-lg-4 py-5 text-center">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/icons/document.svg"} className="icon icon-md mb-3" alt="speed" />
                                        <h5 className="fw-bold text-primary">Documentation</h5>
                                        <p className="mb-0 text-gray-600">Everything that comes is well documented.</p>
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
