import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { useState } from "react"
import { Link } from "react-router-dom"
import DepartmentDocs from "./DepartmentDocs"
import FacultyDocs from "./FacultyDocs"
import StudentDocs from "./StudentDocs"



const Documentation = () => {

    const [studDocs, setStudDocs] = useState(false)
    const [facDocs, setFacDocs] = useState(false)
    const [depDocs, setDepDocs] = useState(false)

    return (
        <>
            <header className="header-global mb-2">
                <Navbar bg={'info'} />
            </header>
            <main>
                <section className="section-header overflow-hidden pt-7 pt-lg-8 pb-4 pb-lg-4 bg-info text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="fw-bolder">Algo Pay - Documentation</h1>
                                <h2 className="lead fw-normal text-muted mb-5">Documentation page for the algo pay platform</h2>
                                <div className="d-flex align-items-center justify-content-center mb-5">
                                    <Link to="/dashboard" className="btn btn-secondary d-inline-flex align-items-center me-4">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"></path></svg>
                                        Read The Docs
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
                                <h2 className="h1 px-lg-5">Outline of the documentation</h2>
                                <p className="lead px-lg-10">Every user of algo pay has been carefully equipped with a dashboard to provide all the necessary functionalities he/she needs</p>
                            </div>
                        </div>
                        <div className="row mb-5 mx-auto">
                            <div className="col-lg-4 col-sm-12 col-xxl-4 mb-4">
                                <div className="card border-0 shadow">
                                    <div className="card-header border-bottom d-flex align-items-center justify-content-between mx-auto">
                                        <h2
                                            onClick={() => setStudDocs(!studDocs)}
                                            className={`btn fs-6 fw-bold mb-0 bg-${studDocs ? 'tertiary' : 'gray-500'} text-white p-2 rounded`}
                                        >Students</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xxl-4 mb-4">
                                <div className="card border-0 shadow">
                                    <div className="card-header border-bottom d-flex align-items-center justify-content-between  mx-auto">
                                        <h2
                                            onClick={() => setFacDocs(!facDocs)}
                                            className={`btn fs-6 fw-bold mb-0 bg-${facDocs ? 'tertiary' : 'gray-500'} text-white p-2 rounded`}
                                        >Faculty</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-xxl-4 mb-4">
                                <div className="card border-0 shadow">
                                    <div className="card-header border-bottom d-flex align-items-center justify-content-between  mx-auto">
                                        <h2
                                            onClick={() => setDepDocs(!depDocs)}
                                            className={`btn fs-6 fw-bold mb-0 bg-${depDocs ? 'tertiary' : 'gray-500'} text-white p-2 rounded`}
                                        >Department</h2>
                                    </div>
                                </div>
                            </div>
                            {studDocs && (
                                <StudentDocs />
                            )}
                            {facDocs && (
                                <FacultyDocs />
                            )}
                            {depDocs && (
                                <DepartmentDocs /> 
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer bg={'info'} />
        </>
    )
}

export default Documentation
