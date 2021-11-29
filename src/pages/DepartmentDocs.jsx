


const DepartmentDocs = () => {
    return (
        <>
            <div className="col-12 col-xxl-12 mb-1 mt-5">
                <div className="card border-0 shadow">
                    <div className="card-header border-bottom d-flex align-items-center justify-content-between">
                        <h2 className="fw-bold mb-0 badge p-2 rounded bg-gray-800">
                            1
                        </h2>
                        <span className="ms-auto bg-light">DEPARTMENT-SIGNUP</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush list my--3">
                            <li className="list-group-item px-0">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        This page allows for department administrators to create new accounts on the algo pay platform. <br /> The required fields are, a mnemonic key which is provided by the algorand SDK
                                        <small className="alert-primary p-1 rounded">
                                            (mnemonic keys are 25-word pattern that best represents the private key and performs the same functions as the private keys. They are easily readable and easy to memorise as well.),
                                        </small>
                                        &nbsp; their personnel mail, an algo wallet address &nbsp;<small className="alert-primary p-1 rounded">(generated with new mnemonic key),</small> &nbsp;
                                        fullname, department name, department ID and personnel ID. <hr /><small className="alert-warning p-1 rounded">Please ensure to save your mnemonic keys in a secure manner by writing them down in pen or electronically as the system does not store them.</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-4 col-xxl-4 mb-4">
            </div>
            <div className="col-12 col-xxl-12 mb-4">
                <div className="card border-0 shadow">
                    <div className="card-header border-bottom d-flex align-items-center justify-content-between">
                        <h2 className="fw-bold mb-0 badge p-2 rounded bg-gray-800">
                            2
                        </h2>
                        <span className="ms-auto bg-light">DEPARTMENT-LOGIN</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush list my--3">
                            <li className="list-group-item px-0">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        This page allows for department administrators to login to their dashboard provided they have an account. <br /> The required fields are, their mnemonic key which was generated on signup,
                                        their personnel mail and password.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-4 col-xxl-4 mb-4">
            </div>
            <div className="col-12 col-xxl-12 mb-4">
                <div className="card border-0 shadow">
                    <div className="card-header border-bottom d-flex align-items-center justify-content-between">
                        <h2 className="fw-bold mb-0 badge p-2 rounded bg-gray-800">
                            3
                        </h2>
                        <span className="ms-auto bg-light">DEPARTMENT-PAYMENTS</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush list my--3">
                            <li className="list-group-item px-0">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        This collection of pages allows for department administrators to view and verify the receipts of payments for both school and department fees paid by their faculty students.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartmentDocs
