import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import NavbarToggler from "./NavbarToggler"
import SidebarNav from "./SidebarNav"
import TopNavbar from "./TopNavbar"
import Loader from "components/Loader/Loader"
import MetaLoader from "components/Loader/MetaLoader"
import { departmentGetDepartmentReceipt, departmentVerifyDepartmentReceipt } from "state/actions/departmentActions"



const VerifyDepartmentReceipt = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const authState = useSelector(state => state.departmentAuth)
    const receiptState = useSelector(state => state.departmentReceipt)
    const verificationState = useSelector(state => state.verifyDepartmentReceipt)
    const { department } = authState
    const { loading, departmentreceipt } = receiptState
    const { vloading } = verificationState


    useEffect(() => {
        if (!department) return navigate('/department/signin', { replace: true })
        dispatch(departmentGetDepartmentReceipt(params.receiptId))
    }, [department, navigate, dispatch, params])


    const verifyReceipt = async (e) => {
        e.preventDefault()
        dispatch(departmentVerifyDepartmentReceipt(params.receiptId))

        return navigate('/department/receipts/departmentcharges')
    }


    return (
        <>
            <header>
                <NavbarToggler />
                <SidebarNav />
            </header>
            <main className="content">
                <TopNavbar />
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <div className="row">
                            {loading ? <MetaLoader /> : null}
                            {vloading ? <Loader /> : null}
                            {departmentreceipt ? (
                                <>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <ul class="list-group">
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">
                                                    Verified:  </span>&nbsp;
                                                <span className="alert-danger p-2 rounded">{departmentreceipt.verified ? 'true' : "false"}</span>
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment ID:  </span>{departmentreceipt.paymentId}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Address:  </span>{departmentreceipt.paidTo}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Student Algo ID: </span>{departmentreceipt.studentAlgoId}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Student Name: </span>{departmentreceipt.fullName}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Matriculation Number: </span>{departmentreceipt.matriculationNumber}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Faculty: </span>{departmentreceipt.paymentFaculty}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Type: </span>{departmentreceipt.paymentType}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Amount (Algo): </span>{departmentreceipt.amount / 1000000} Algo
                                            </li><hr />
                                            <li className="list-group-item font-small">
                                                <span className="fw-bold">Payment Amount (&#8358;): </span>1,500.00
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Channel: </span>Algorand
                                            </li><hr />
                                            <li class="list-group-item font-small mb-4">
                                                {!departmentreceipt.verified ? (
                                                    <button
                                                        type="submit"
                                                        // onClick={verifyReceipt}
                                                        className="btn btn-info col-12 text-white"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#payment-modal"
                                                    >Verify</button>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="btn btn-info col-12 text-white"
                                                    >Verify</button>
                                                )}
                                            </li>
                                        </ul>
                                        <div
                                            className="modal fade"
                                            id="payment-modal"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-labelledby="payment-modal"
                                            aria-hidden="true"
                                        >
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
                                                        <p className="fw-bold">
                                                            Please confirm the following that a total amount of <br />
                                                            <span className="bg-info text-white rounded p-1">{departmentreceipt.amount / 1000000} Algos </span> &nbsp;was paid to the receiver address
                                                        </p>
                                                        <p className="alert-warning rounded text-sm-center p-2 mt-2">Please ensure that you have carefully verified the transaction details displayed on the page before proceeding</p>
                                                    </div>
                                                    <div className="modal-footer mx-auto">
                                                        <button
                                                            type="submit"
                                                            onClick={verifyReceipt}
                                                            className="btn btn-tertiary text-white ms-auto"
                                                            data-bs-dismiss="modal"
                                                        >Verify Transaction </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <iframe
                                            className="col-lg-8 col-md-8 col-sm-8 rounded"
                                            title='algo explorer'
                                            src={`https://testnet.algoexplorer.io/tx/${departmentreceipt.paymentId}`}
                                            style={{ width: "100%", height: "100%" }}
                                            allowfullscreen=""
                                        ></iframe>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default VerifyDepartmentReceipt
