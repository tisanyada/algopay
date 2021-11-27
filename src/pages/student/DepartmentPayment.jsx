import NavbarToggler from "components/StudentDashboard/NavbarToggler"
import SidebarNav from "components/StudentDashboard/SidebarNav"
import TopNavbar from "components/StudentDashboard/TopNavbar"
import Loader from "components/Loader/Loader"
import Message from "components/Message/Message"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getDepartmentPaymentInfo,getDepartmentReceipt, payDepartmentCharges } from "state/actions/studentActions"



const DepartmentPayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [paymentType] = useState('Department Fees')
    const [paymentAmount] = useState('#1500')

    const authState = useSelector(state => state.auth)
    const paymentInfo = useSelector(state => state.departmentPaymentInfo)
    const receiptState = useSelector(state => state.departmentreceipt)
    const paymentState = useSelector(state => state.departmentpayment)
    const { student } = authState
    const { departmentpaymentInfo } = paymentInfo
    const { departmentreceipt } = receiptState
    const { loading, error, message } = paymentState

    useEffect(() => {
        if (!student) navigate('/signin', { replace: true })
    }, [student, navigate])

    useEffect(() => {
        dispatch(getDepartmentReceipt())
        dispatch(getDepartmentPaymentInfo())
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(payDepartmentCharges({ paymentType, mnemonicKey: student.mnemonicKey }))
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
                                        <h4>pay department charges</h4>
                                        <div className="col-lg-12 col-sm-12">
                                            {loading && <Loader />}
                                            {message && <Message message={message} type='success' />}
                                            {error && <Message message={error} type='danger' />}
                                            <div className="mb-3">
                                                <label htmlFor="paymentType">Payment Type</label>
                                                <input
                                                    type="paymentType"
                                                    className="form-control"
                                                    id="paymentType"
                                                    value={paymentType}
                                                    disabled
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="amount">Payment Type</label>
                                                <input
                                                    type="amount"
                                                    className="form-control"
                                                    id="amount"
                                                    value={paymentAmount}
                                                    disabled
                                                />
                                            </div>
                                            {!departmentreceipt && !message ? (
                                                <>
                                                    {/* <button className="btn btn-info mx-auto col-5 mt-4" type="submit">💰 Pay</button> */}
                                                    <button
                                                        type="button"
                                                        className="btn btn-block btn-info mb-3 col-5"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#payment-modal"
                                                    >
                                                        💰 Pay
                                                    </button>
                                                    <div className="modal fade" id="payment-modal" tabindex="-1" role="dialog" aria-labelledby="payment-modal" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h2 className="h6 modal-title">
                                                                        <p className="p-2 mt-1">
                                                                            Confirm Transaction Details &nbsp;&nbsp;
                                                                            <img src={process.env.PUBLIC_URL + "/assets/img/icons/icons8-signature-48.png"} alt="sign" />
                                                                        </p>
                                                                    </h2>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="card-body">
                                                                    <p>You are about to complete the payment of your school fees on the alorand blockchain</p>
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item btn text-info fw-bolder">PAYMENT INFO</li>
                                                                        <li className="list-group-item bg-gray-200">
                                                                            <p className="fw-bolder">Account:</p> {student && student.algoAddress}
                                                                        </li>
                                                                        <li className="list-group-item">
                                                                            <p className="fw-bolder">Payment Address:</p>
                                                                            {departmentpaymentInfo && departmentpaymentInfo.paymentAddress}
                                                                        </li>
                                                                        <li className="list-group-item bg-gray-100">
                                                                            <p className="fw-bolder">Amount(&#8358;): {departmentpaymentInfo && departmentpaymentInfo.paymentAmount}</p>
                                                                        </li>
                                                                        <li className="list-group-item bg-gray-100">
                                                                            <p className="alert-danger p-1 rounded">You are about to spend: {departmentpaymentInfo && departmentpaymentInfo.algoAmount} Algos</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="modal-footer mx-auto">
                                                                    <button type="submit" className="btn btn-tertiary text-white ms-auto" data-bs-dismiss="modal">Sign Transaction </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <span class="badge btn-gray-800 mx-auto col-5 mt-4 p-3">Paid</span>
                                            )}
                                        </div>
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



export default DepartmentPayment