import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import NavbarToggler from "components/DepartmentDashboard/NavbarToggler"
import TopNavbar from "components/DepartmentDashboard/TopNavbar"
import SidebarNav from "components/DepartmentDashboard/SidebarNav"
import UnverifiedDepartmentReceipts from "components/DepartmentDashboard/UnverifiedDepartmentReceipts"
import VerifiedDepartmentReceipts from "components/DepartmentDashboard/VerifiedDepartmentReceipts"


const DepartmentsReceipts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [view, setView] = useState(true)

    const authState = useSelector(state => state.departmentAuth)
    const { department } = authState


    useEffect(() => {
        if (!department) return navigate('/department/signin', { replace: true })
    }, [department, navigate, dispatch])

    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                {department && (
                    <>
                        <div className="ml-auto bg-tertiary bagde p-1 rounded text-white text-center col-2">department receipts</div>
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
                                    <UnverifiedDepartmentReceipts />
                                ) : (
                                    <VerifiedDepartmentReceipts />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    )
}

export default DepartmentsReceipts
