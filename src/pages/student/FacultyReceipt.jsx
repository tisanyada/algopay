import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import QRCode from 'qrcode'
import NavbarToggler from "components/StudentDashboard/NavbarToggler"
import SidebarNav from "components/StudentDashboard/SidebarNav"
import TopNavbar from "components/StudentDashboard/TopNavbar"
import { getFacultyReceipt } from "state/actions/studentActions"



const FacultyReceipt = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [qrcode, setQRCode] = useState('')

    const authState = useSelector(state => state.auth)
    const { student } = authState
    const receiptState = useSelector(state => state.facultyreceipt)
    const { facultyreceipt } = receiptState

    useEffect(() => {
        dispatch(getFacultyReceipt())
    }, [dispatch])

    useEffect(() => {
        if (!student) {
            navigate('/signin', { replace: true })
        }
        if (facultyreceipt) {
            const link = 'https://testnet.algoexplorer.io/tx/'.concat(facultyreceipt.paymentId)
            QRCode.toDataURL(link).then(url => setQRCode(url)).catch(err => console.log(err))
        }
    }, [student, navigate, facultyreceipt, dispatch])


    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                <>
                    {facultyreceipt ? (
                        <>
                            <div className="container mb-5">
                                <div className="card mt-3">
                                    <div className="card-header"> <strong>{facultyreceipt && facultyreceipt.createdAt.split('T')[0]}</strong> <span className="float-right"> <strong>Status:</strong> Paid</span> </div>
                                    <div className="card-body">
                                        <div className="row mb-5">
                                            <div className="mt-4 col-xl-5 col-lg-5 col-md-6 col-sm-12">
                                                <h6>Payer Information:</h6>
                                                <div> <strong>Name:</strong> {facultyreceipt && facultyreceipt.fullName}</div>
                                                <div><strong>Matriculation Number</strong> {facultyreceipt && facultyreceipt.matriculationNumber} </div>
                                            </div>
                                            <div className="mt-4 col-xl-1 col-lg-1 col-md-6 col-sm-12">

                                            </div>
                                            <div className="mt-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start">
                                                <div
                                                    className="row align-items-center"
                                                >
                                                    < img src={qrcode} className="img-fluid" style={{ maxHeight: "15em;", height: "15em" }} alt="" /><br />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive-sm">
                                            <table className="table table-striped bg-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th>Payment Summary</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Transaction Reference ID</td>
                                                        <td className="left">{facultyreceipt && facultyreceipt.paymentId}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Student Algo ID</td>
                                                        <td className="left">{facultyreceipt && facultyreceipt.studentAlgoId}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Student Faculty</td>
                                                        <td className="left">{facultyreceipt && facultyreceipt.paymentFaculty}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Student Department</td>
                                                        <td className="left">{facultyreceipt && facultyreceipt.paymentDepartment}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Payment Type</td>
                                                        <td className="left">{facultyreceipt && facultyreceipt.paymentType}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Payment Amount(&#8358;)</td>
                                                        <td className="left">1,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Payment Charges(&#8358;)</td>
                                                        <td className="left">13.014</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Payment Date</td>
                                                        <td className="left">{facultyreceipt && facultyreceipt.createdAt.split('T')[0]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Payment Channel</td>
                                                        <td className="left">Algorand</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="container">
                            <div className="card mt-3">
                                <div className="card-header"> <strong></strong> <span className="float-right"> <strong>Status:</strong> Not Paid</span> </div>
                                <div className="card-body">
                                    Receipts for faculty payments will go here
                                </div>
                            </div>
                        </div>
                    )}
                </>
            </main >
        </>
    )
}

export default FacultyReceipt
