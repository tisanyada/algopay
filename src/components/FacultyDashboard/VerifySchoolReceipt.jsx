import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import NavbarToggler from "./NavbarToggler"
import SidebarNav from "./SidebarNav"
import TopNavbar from "./TopNavbar"
import Loader from "components/Loader/Loader"
import MetaLoader from "components/Loader/MetaLoader"
import { facultyGetSchoolReceipt, facultyVerifySchoolReceipt } from "state/actions/facultyActions"


const VerifySchoolReceipt = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const authState = useSelector(state => state.facultyAuth)
    const receiptState = useSelector(state => state.schoolReceipt)
    const verificationState = useSelector(state => state.verifySchoolReceipt)
    const { faculty } = authState
    const { loading, schoolreceipt } = receiptState
    const { vloading } = verificationState


    useEffect(() => {
        if (!faculty) return navigate('/faculty/signin', { replace: true })
        dispatch(facultyGetSchoolReceipt(params.receiptId))
    }, [faculty, navigate, dispatch, params])


    const verifyReceipt = async (e) => {
        e.preventDefault()
        dispatch(facultyVerifySchoolReceipt(params.receiptId))

        return navigate('/faculty/receipts/schoolcharges')
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
                            {schoolreceipt ? (
                                <>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <ul class="list-group">
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">
                                                    Verified:  </span>&nbsp;
                                                <span className="alert-danger p-2 rounded">{schoolreceipt.verified ? 'true' : "false"}</span>
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment ID:  </span>{schoolreceipt.paymentId}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Address:  </span>{schoolreceipt.paidTo}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Student Algo ID: </span>{schoolreceipt.studentAlgoId}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Student Name: </span>{schoolreceipt.fullName}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Matriculation Number: </span>{schoolreceipt.matriculationNumber}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Faculty: </span>{schoolreceipt.paymentFaculty}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Type: </span>{schoolreceipt.paymentType}
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Amount (Algo): </span>{schoolreceipt.amount / 1000000} Algo
                                            </li><hr />
                                            <li className="list-group-item font-small">
                                                <span className="fw-bold">Payment Amount (&#8358;): </span>45,000.00
                                            </li><hr />
                                            <li class="list-group-item font-small">
                                                <span className="fw-bold">Payment Channel: </span>Algorand
                                            </li><hr />
                                            <li class="list-group-item font-small mb-4">
                                                {!schoolreceipt.verified ? (
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
                                                            <span className="bg-info text-white rounded p-1">{schoolreceipt.amount / 1000000} Algos </span> &nbsp;was paid to the receiver address
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
                                            src={`https://testnet.algoexplorer.io/tx/${schoolreceipt.paymentId}`}
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

export default VerifySchoolReceipt
