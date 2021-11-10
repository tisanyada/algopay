import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProfile } from "state/actions/studentActions"




const Createprofile = () => {
    const dispatch = useDispatch()

    const [fullName, setFullName] = useState('')
    const [matriculationNumber, setMatriculationNumber] = useState('')
    const [faculty, setFaculty] = useState('')
    const [department, setDepartment] = useState('')
    const [level, setLevel] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const profileState = useSelector(state => state.profile)
    const { loading, errors } = profileState
    const authState = useSelector(state => state.auth)
    const { student } = authState

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createProfile({
            fullName,
            schoolMail: student.schoolMail,
            algoAddress: student.algoAddress, matriculationNumber,
            faculty,
            department,
            level,
            phoneNumber
        }))
    }

    return (
        <div className="row">
            <div className="col-10 mx-auto mb-4">
                <div className="card border-0 shadow components-section">
                    <div className="card-body">
                        <form onSubmit={onSubmit} className="row mb-4">
                            <h1>create profile</h1>
                            <div className="col-lg-6 col-sm-6">
                                <div className="mb-3">
                                    <label htmlFor="fullName">Fullname</label>
                                    <input
                                        type="fullName"
                                        className="form-control"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.fullName ? errors.fullName : ''
                                        ) : ''}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="algoAddress">Algo Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="algoAddress"
                                        value={student && student.algoAddress}
                                        disabled
                                    />
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.algoAddress ? errors.algoAddress : ''
                                        ) : ''}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="faculty">Faculty</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="faculty"
                                        value={faculty}
                                        onChange={(e) => setFaculty(e.target.value)}
                                    />
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.faculty ? errors.faculty : ''
                                        ) : ''}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="level">Level</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="level"
                                        value={level}
                                        onChange={(e) => setLevel(e.target.value)}
                                    />
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.level ? errors.level : ''
                                        ) : ''}
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="mb-2">
                                    <label htmlFor="schoolMail">School Mail</label>
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="schoolMail"
                                            value={student && student.schoolMail}
                                            disabled
                                        />
                                    </div>
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.schoolMail ? errors.schoolMail : ''
                                        ) : ''}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="matriculatioNumber">Matriculation Number</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="matriculatioNumber"
                                            value={matriculationNumber}
                                            onChange={(e) => setMatriculationNumber(e.target.value)}
                                        />
                                    </div>
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.matriculationNumber ? errors.matriculationNumber : ''
                                        ) : ''}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="department">Department</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    />
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.department ? errors.department : ''
                                        ) : ''}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phoneNumber"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                    <span className='badge alert-warning'>
                                        {errors ? (
                                            errors.phoneNumber ? errors.phoneNumber : ''
                                        ) : ''}
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-gray-800 mx-auto col-6 mt-4" type="submit">Create profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createprofile
