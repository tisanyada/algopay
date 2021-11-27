import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import NavbarToggler from "components/FacultyDashboard/NavbarToggler"
import TopNavbar from "components/FacultyDashboard/TopNavbar"
import SidebarNav from "components/FacultyDashboard/SidebarNav"
import UnverifiedFacultyReceipts from "components/FacultyDashboard/UnverifiedFacultyReceipts"
import VerifiedFacultyReceipts from "components/FacultyDashboard/VerifiedFacultyReceipts"


const FacultyReceipts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [view, setView] = useState(true)

    const authState = useSelector(state => state.facultyAuth)
    const { faculty } = authState


    useEffect(() => {
        if (!faculty) return navigate('/faculty/signin', { replace: true })
    }, [faculty, navigate, dispatch])

    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                {faculty && (
                    <>
                        <div className="ml-auto bg-tertiary bagde p-1 rounded text-white text-center col-2">faculty receipts</div>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <button
                                    className={`btn ${view ? 'btn-gray-700 text-white' : 'btn-outline-gray-400 btn-sm'} mx-2 mb-2`}
                                    onClick={() => setView(true)}
                                >
                                    Unverified Receipts
                                </button>
                                <button
                                    className={`btn ${view ? 'btn-outline-gray-400 btn-sm' : 'btn-gray-700 btn-sm'} mx-2 mb-2`}
                                    onClick={() => setView(false)}
                                >
                                    Verified Receipts
                                </button>
                                {view ? (
                                    <UnverifiedFacultyReceipts />
                                ) : (
                                    <VerifiedFacultyReceipts />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    )
}

export default FacultyReceipts
