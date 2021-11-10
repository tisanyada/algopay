const mn = "fluid offer kitten detail strategy meat thank discover puppy arctic amazing grass claw aware sponsor second mobile profit cliff west focus people tragic absorb cage"
const smail = "2019ns0292@unijos.edu.ng"

import NavbarToggler from "components/Dashboard/NavbarToggler"
import RowoneContent from "components/Dashboard/RowoneContent"
import SidebarNav from "components/Dashboard/SidebarNav"
import TopNavbar from "components/Dashboard/TopNavbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const SchoolPayment = () => {
    const navigate = useNavigate()

    const authState = useSelector(state => state.auth)
    const { student } = authState
    const profileState = useSelector(state => state.profile)
    const { studentprofile } = profileState

    useEffect(() => {
        if (!student) navigate('/signin', { replace: true })
    }, [student, navigate])

    const onSubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                <>
                    <div className="row">
                        <div className="col-10 mx-auto mb-4">
                            <div className="card border-0 shadow components-section">
                                <div className="card-body">
                                    <form onSubmit={onSubmit} className="row mb-4">
                                        <h4>pay school charges</h4>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="mb-3">
                                                <label htmlFor="fullName">Fullname</label>
                                                <input
                                                    type="fullName"
                                                    className="form-control"
                                                    id="fullName"
                                                    // value={fullName}
                                                    // onChange={(e) => setFullName(e.target.value)}
                                                />
                                                {/* <span className='badge alert-warning'>
                                                    {errors ? (
                                                        errors.fullName ? errors.fullName : ''
                                                    ) : ''}
                                                </span> */}
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="algoAddress">Algo Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="algoAddress"
                                                    value={student && student.algoAddress}
                                                    disabled
                                                />
                                                {/* <span className='badge alert-warning'>
                                                    {errors ? (
                                                        errors.algoAddress ? errors.algoAddress : ''
                                                    ) : ''}
                                                </span> */}
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="faculty">Faculty</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="faculty"
                                                    // value={faculty}
                                                    // onChange={(e) => setFaculty(e.target.value)}
                                                />
                                                {/* <span className='badge alert-warning'>
                                                    {errors ? (
                                                        errors.faculty ? errors.faculty : ''
                                                    ) : ''}
                                                </span> */}
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="level">Level</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="level"
                                                    // value={level}
                                                    // onChange={(e) => setLevel(e.target.value)}
                                                />
                                                {/* <span className='badge alert-warning'>
                                                    {errors ? (
                                                        errors.level ? errors.level : ''
                                                    ) : ''}
                                                </span> */}
                                            </div>
                                        </div>
                                        <button class="btn btn-gray-800 mx-auto col-6 mt-4" type="submit">Create profile</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </main>
        </>
    )
}



export default SchoolPayment