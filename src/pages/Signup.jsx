import Footer from "components/Footer/Footer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import algosdk from 'algosdk'
import { createStudent } from "state/actions/studentActions"




const Signup = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()

    const [mnemonicKey, setMnemonicKey] = useState('')
    const [schoolMail, setSchoolMail] = useState('')
    const [algoAddress, setAlgoAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    const authState = useSelector(state => state.auth)
    const { student } = authState
    const registerState = useSelector(state => state.register)
    const { loading, errors } = registerState

    useEffect(() => {
        if (student) {
            navigator('/dashboard', {replace: true})
        }
    }, [authState, student, navigator])

    const generateMnemonicKey = () => {
        const acc = algosdk.generateAccount()
        const mn = algosdk.secretKeyToMnemonic(acc.sk)
        setAlgoAddress(acc.addr)
        setMnemonicKey(mn)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createStudent({ schoolMail, mnemonicKey, algoAddress, password, confirm_password }))
    }

    return (
        <>
            <main>
                <section className="section section-sm pt-sm-5 bg-soft d-flex align-items-center">
                    <div className="container">
                        <p className="text-center bg-black">
                            <Link to="/" className="d-flex align-items-center justify-content-center">
                                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                                Back
                            </Link>
                        </p>
                        {/* <div className="row justify-content-center form-bg-image" data-background-lg={process.env.PUBLIC_URL +"./assets/img/illustrations/signin.svg"}> */}
                        <div className="row form-bg-image" data-background-lg="./assets/img/illustrations/signin.svg">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                    <div className="text-center text-md-center mb-4 mt-md-0">
                                        <h1 className="mb-0 h3">Create Account </h1>
                                    </div>
                                    <form
                                        onSubmit={onSubmit}
                                        className="mt-4"
                                    >
                                        <div className="form-group mb-4">
                                            <label htmlFor="schoolmail">School Email</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                </span>
                                                <input
                                                    type="schoolmail"
                                                    className="form-control"
                                                    placeholder="2001ED0112@unijos.edu.ng"
                                                    id="schoolmail"
                                                    value={schoolMail}
                                                    onChange={(e) => setSchoolMail(e.target.value)}
                                                />
                                            </div>
                                            <span className='badge alert-warning'>
                                                {errors ? (
                                                    errors.schoolMail ? errors.schoolMail : ''
                                                ) : ''}
                                            </span>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="mnemonickey">Mnemonic Key</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                </span>
                                                <textarea
                                                    cols="20"
                                                    rows="4"
                                                    type="mnemonickey"
                                                    className="form-control"
                                                    placeholder=""
                                                    id="mnemonickey"
                                                    disabled
                                                    value={mnemonicKey}
                                                    onChange={(e) => setMnemonicKey(e.target.value)}
                                                ></textarea>
                                            </div>
                                            <button
                                                onClick={generateMnemonicKey}
                                                type="button"
                                                className=" mt-1 col-sm-6 d-flex align-items-center justify-content-center btn-slim btn-secondary"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="bottom"
                                                title="click to generate algo account mnemonic key"
                                            >
                                                Generate Mnemonic Key
                                            </button>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="email">Algo Address</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder=""
                                                    id="email"
                                                    disabled
                                                    value={algoAddress}
                                                    onChange={(e) => setAlgoAddress(e.target.value)}
                                                />
                                            </div>
                                            <span className='badge alert-warning'>
                                                {errors ? (
                                                    errors.algoAddress ? errors.algoAddress : ''
                                                ) : ''}
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group mb-4">
                                                <label htmlFor="password">Password</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="basic-addon2">
                                                        <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        className="form-control"
                                                        id="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <span className='badge alert-warning'>
                                                    {errors ? (
                                                        errors.password ? errors.password : ''
                                                    ) : ''}
                                                </span>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label htmlFor="password">Confirm Password</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="basic-addon2">
                                                        <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        className="form-control"
                                                        id="password"
                                                        value={confirm_password}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </div>
                                                <span className='badge alert-warning'>
                                                    {errors ? (
                                                        errors.confirm_password ? errors.confirm_password : ''
                                                    ) : ''}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-gray-800">Sign up</button>
                                        </div>
                                    </form>
                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                        <span className="fw-normal">
                                            Already have an account?&nbsp;
                                            <Link to="/signin" className="fw-bold">Login here</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Signup
