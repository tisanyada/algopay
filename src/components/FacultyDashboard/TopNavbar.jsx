import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { facultyLogout } from "state/actions/facultyActions"



const TopNavbar = () => {
    const dispatch = useDispatch()

    const authState = useSelector(state => state.facultyAuth)
    const { faculty } = authState


    const logoutHandler = () => {
        dispatch(facultyLogout())
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
                                <span className="mt-1 ms-1 sidebar-text">Algos</span>
                            </button>
                        </div>
                        <ul className="navbar-nav align-items-right">
                            <li className="nav-item dropdown">
                                {/* <Link className="nav-link text-dark notification-bell unread dropdown-toggle" to="#" role="button">
                                    <svg className="icon icon-sm text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                                </Link> */}
                            </li>
                            <li className="nav-item dropdown ms-lg-3">
                                <Link className="nav-link dropdown-toggle pt-1 px-0" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="media d-flex align-items-center">
                                        <img
                                            className="avatar rounded-circle" alt="avatar placeholder"
                                            src={process.env.PUBLIC_URL + "/assets/img/team/user.png"}
                                        />
                                        <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                            <span className="btn btn-gray-500 d-inline-flex align-items-center me-2">{faculty && faculty.fullName}</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                        My Profile
                                    </Link>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                                        Support
                                    </Link>
                                    <div role="separator" className="dropdown-divider my-1"></div>
                                    <Link className="dropdown-item d-flex align-items-center" to="#" onClick={logoutHandler}>
                                        <svg className="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        Logout
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopNavbar
