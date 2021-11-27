import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import QRCode from 'qrcode'
import NavbarToggler from "components/StudentDashboard/NavbarToggler"
import SidebarNav from "components/StudentDashboard/SidebarNav"
import TopNavbar from "components/StudentDashboard/TopNavbar"
import { getSchoolReceipt } from "state/actions/studentActions"
import MetaLoader from "components/Loader/MetaLoader"



const SchoolReceipt = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [qrcode, setQRCode] = useState('')


    const authState = useSelector(state => state.auth)
    const { student } = authState
    const receiptState = useSelector(state => state.schoolreceipt)
    const { loading, schoolreceipt } = receiptState

    useEffect(() => {
        dispatch(getSchoolReceipt())
    }, [dispatch])

    useEffect(() => {
        if (!student) {
            navigate('/signin', { replace: true })
        }
        if (schoolreceipt) {
            const link = 'https://testnet.algoexplorer.io/tx/'.concat(schoolreceipt.paymentId)
            QRCode.toDataURL(link).then(url => setQRCode(url)).catch(err => console.log(err))
        }
    }, [student, navigate, schoolreceipt, dispatch])



    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                <>
                    {loading ? <MetaLoader /> : schoolreceipt ? (
                        <>
                            <div className="container mb-5">
                                <div className="card mt-3">
                                    <div className="card-header"> <strong>{schoolreceipt && schoolreceipt.createdAt.split('T')[0]}</strong> <span className="float-right"> <strong>Status:</strong> Paid</span> </div>
                                    <div className="card-body">
                                        <div className="row mb-5">
                                            <div className="mt-4 col-xl-5 col-lg-5 col-md-6 col-sm-12">
                                                <h6>Payer Information:</h6>
                                                <div> <strong>Name:</strong> {schoolreceipt && schoolreceipt.fullName}</div>
                                                <div><strong>Matriculation Number</strong> {schoolreceipt && schoolreceipt.matriculationNumber} </div>
                                            </div>
                                            <div className="mt-4 col-xl-1 col-lg-1 col-md-6 col-sm-12">

                                            </div>
                                            <div className="mt-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start">
                                                <div
                                                    className="row align-items-center"
                                                >
                                                    < img
                                                        src={qrcode}
                                                        className="img-fluid"
                                                        style={{ maxHeight: "15em;", height: "15em" }}
                                                        alt="receipt QRcode"
                                                    />
                                                    <br />
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
                                                        <td className="left strong">Transaction Reference ID</td>
                                                        <td className="left">{schoolreceipt && schoolreceipt.paymentId}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong fw-bolder">Student Algo ID</td>
                                                        <td className="left">{schoolreceipt && schoolreceipt.studentAlgoId}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong">Student Faculty</td>
                                                        <td className="left">{schoolreceipt && schoolreceipt.paymentFaculty}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong">Student Department</td>
                                                        <td className="left">{schoolreceipt && schoolreceipt.paymentDepartment}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong">Payment Type</td>
                                                        <td className="left">{schoolreceipt && schoolreceipt.paymentType}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong">Payment Amount(&#8358;)</td>
                                                        <td className="left">45,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong">Payment Charges(&#8358;)</td>
                                                        <td className="left">13.014</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong">Payment Date</td>
                                                        <td className="left">{schoolreceipt && schoolreceipt.createdAt.split('T')[0]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="left strong">Payment Channel</td>
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
                                    Receipts for school payments will go here
                                </div>
                            </div>
                        </div>
                    )}
                </>
            </main >
        </>
    )
}

export default SchoolReceipt
