import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAlgoBalance, logoutStudent } from "state/actions/studentActions"



const TopNavbar = () => {
    const dispatch = useDispatch()

    const [accAlgos, setAccAlgos] = useState('')

    const authState = useSelector(state => state.auth)
    const { student } = authState
    const algoBalanceState = useSelector(state => state.algoAccountInfo)
    const { loading, algoInfo } = algoBalanceState

    useEffect(() => {
        dispatch(getAlgoBalance())
    }, [dispatch])

    useEffect(() => {
        if (algoInfo) return setAccAlgos(algoInfo.balance)
    }, [algoInfo])

    const logoutHandler = () => {
        dispatch(logoutStudent())
    }


    return (
        <>
            <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0 mb-5">
                <div className="container-fluid px-0">
                    <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
                        <div className="d-flex align-items-center">
                            <button className="btn btn-gray-800 d-inline-flex align-items-center me-2 dropdown-toggle">
                                <span className="sidebar-icon">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/icons/icons8-blockchain-58.png"} height="20" width="20" alt="algopay Logo" />
                                </span>
                                <span className="mt-1 ms-1 sidebar-text">Algos: {loading ? '0.00' : accAlgos ? accAlgos : '0.00'}</span>
                            </button>
                        </div>
                        <ul className="navbar-nav align-items-right">

                            <li className="nav-item ms-lg-3">
                                <Link className="nav-link pt-1 px-0" to="#" role="button" aria-expanded="false">
                                    <div className="media d-flex align-items-center">
                                        <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                            {/* <span className="btn btn-gray-500 d-inline-flex align-items-center me-2">{student ? student.schoolMail : null}</span> */}
                                            <button type="button" class="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-notification">
                                                <img
                                                    className="avatar rounded-circle" alt="avatar placeholder"
                                                    src={process.env.PUBLIC_URL + "/assets/img/team/user.png"}
                                                />
                                                {student ? student.schoolMail : null}
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div class="modal fade" id="modal-notification" tabindex="-1" role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                            <div class="modal-dialog modal-light modal-dialog-centered" role="document">
                                <div class="modal-content bg-gradient-secondary">
                                    <div class="modal-body text-white">
                                        <div class="py-3">
                                            <h2 class="h6 modal-title my-3 bg-tertiary col-4 ml-auto p-1 rounded text-center">My Profile</h2>
                                            <h2 class="h6 modal-title my-3 bg-tertiary col-4 ml-auto p-1 rounded text-center">Support</h2>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <Link to="#" onClick={logoutHandler} class="btn btn-sm btn-danger">Logout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopNavbar
