import { Link } from "react-router-dom"



const RowtwoContent = ({ departmentprofile: { fullName, personnelID, departmentName, algoAddress } }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-xxl-6 mb-4">
                    <div className="card border-0 shadow">
                        <div className="card-header border-bottom d-flex align-items-center justify-content-between">
                            <h2 className="fs-5 fw-bold mb-0">Profile summary</h2>
                            <Link to="#" className="btn btn-sm btn-primary">See all</Link>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush list my--3">
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto ms--2">
                                            <h4 className="h6 fw-extrabold mb-0">
                                                {fullName ? fullName : null}
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <div className="bg-success dot rounded-circle me-1"></div>
                                                <small>Online</small>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto ms--2">
                                            <h4 className="h6 fw-extrabold mb-0">
                                                <Link to="#">Department</Link>
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <small>{departmentName ? departmentName : null}</small>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto ms--2">
                                            <h4 className="h6 fw-extrabold mb-0">
                                                <Link to="#">Department ID</Link>
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <small>{personnelID ? personnelID : null}</small>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto ms--2">
                                            <h4 className="h6 fw-extrabold mb-0">
                                                <Link to="#">Algo Wallet Address</Link>
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <small>{algoAddress ? algoAddress : null}</small>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RowtwoContent
