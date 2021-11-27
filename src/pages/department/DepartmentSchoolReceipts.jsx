/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import NavbarToggler from "components/DepartmentDashboard/NavbarToggler"
import TopNavbar from "components/DepartmentDashboard/TopNavbar"
import SidebarNav from "components/DepartmentDashboard/SidebarNav"
import Loader from "components/Loader/Loader"
import { departmentGetVerifiedSchoolReceipts } from "state/actions/departmentActions"



const DepartmentSchoolReceipts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const authState = useSelector(state => state.departmentAuth)
    const receiptsState = useSelector(state => state.departmentSchoolReceipts)
    const { department } = authState
    const { loading, verifiedschoolreceipts } = receiptsState


    useEffect(() => {
        if (!department) return navigate('/department/signin', { replace: true })
        dispatch(departmentGetVerifiedSchoolReceipts())
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
                        <div className="ml-auto bg-tertiary bagde p-1 rounded text-white text-center col-2">department school receipts</div>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="table-responsive">
                                    {loading && <Loader />}
                                    <table className="table table-centered table-nowrap mb-0 rounded">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="border-0">Transaction Id</th>
                                                <th className="border-0">Matriculation Number</th>
                                                <th className="border-0">Faculty</th>
                                                <th className="border-0">Payment Type</th>
                                                <th className="border-0">Amount</th>
                                                <th className="border-0">Verified</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {verifiedschoolreceipts && verifiedschoolreceipts.length > 0 ? verifiedschoolreceipts.map(receipt => (
                                                <tr key={receipt._id}>
                                                    <td className="border-0 fw-bold">
                                                        {receipt.paymentId.slice(0, 12)}....
                                                    </td>
                                                    <td className="border-0 fw-bold">
                                                        {receipt.matriculationNumber.toUpperCase()}
                                                    </td>
                                                    <td className="border-0 fw-bold">{receipt.paymentFaculty}</td>
                                                    <td className="border-0 fw-bold">
                                                        {receipt.paymentType}
                                                    </td>
                                                    <td className="border-0">
                                                        &#8358;45,000
                                                    </td>
                                                    <td className="border-0 fw-bold bg-success text-white text-center">
                                                        {receipt.verified ? 'true' : null}
                                                    </td>
                                                </tr>
                                            )) : (
                                                <tr className="border-2 fw-bold mt-4">
                                                    <td className="text-success">verified receipts will go here</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    )
}

export default DepartmentSchoolReceipts
