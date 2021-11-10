import { Link } from "react-router-dom"



const RowtwoContent = ({ studentprofile: { fullName, faculty, department, level, matriculationNumber, algoAddress } }) => {
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
                                        <div className="col text-end">
                                            <div className="btn btn-sm btn-secondary d-inline-flex align-items-center">
                                                <svg className="icon icon-xxs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                                Level: {level ? level : null}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto ms--2">
                                            <h4 className="h6 fw-extrabold mb-0">
                                                <Link to="#">Faculty</Link>
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <small>{faculty ? faculty : null}</small>
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
                                                <small>{department ? department : null}</small>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item px-0">
                                    <div className="row align-items-center">
                                        <div className="col-auto ms--2">
                                            <h4 className="h6 fw-extrabold mb-0">
                                                <Link to="#">Matriculation Number</Link>
                                            </h4>
                                            <div className="d-flex align-items-center">
                                                <small>{matriculationNumber ? matriculationNumber : null}</small>
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
