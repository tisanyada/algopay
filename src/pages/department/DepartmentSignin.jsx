import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "components/Footer/Footer"
import { departmentLogin } from "state/actions/departmentActions"




const DepartmentSignin = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()

    const [mnemonicKey, setMnemonicKey] = useState('')
    const [personnelMail, setPersonnelMail] = useState('')
    const [password, setPassword] = useState('')

    const authState = useSelector(state => state.departmentAuth)
    const { department, loading, errors } = authState
    

    useEffect(() => {
        if (authState != null && department) {
            navigator('/department/dashboard', { replace: true })
        }
    }, [authState, department, navigator])


    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(departmentLogin({ mnemonicKey, personnelMail, password }))
    }

    return (
        <>
            <main>
                <section className="section section-sm pt-sm-5 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
                    <div className="container">
                        <p className="text-center">
                            <Link to="/" className="d-flex align-items-center justify-content-center">
                                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                                Back
                            </Link>
                        </p>
                        <div className="row justify-content-center form-bg-image" data-background-lg={process.env.PUBLIC_URL + "/assets/img/illustrations/signin.svg"}>
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                    <div className="text-center text-md-center mb-4 mt-md-0">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/icons/administrator-work-svgrepo-com.svg"} height="45" alt="" />
                                        <h1 className="mb-0 h3">Department Signin</h1>
                                    </div>
                                    <form
                                        onSubmit={onSubmit}
                                        className="mt-4"
                                    >
                                        <div className="form-group mb-4">
                                            <label htmlFor="mnemonickey">Mnemonic Key</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    {/* <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                                                    <img src={process.env.PUBLIC_URL + "/assets/img/icons/blockchain-dot-com-svgrepo-com.svg"} className="icon icon-xs" alt="" />
                                                </span>
                                                <textarea
                                                    cols="20"
                                                    rows="3"
                                                    type="mnemonickey"
                                                    className="form-control"
                                                    placeholder="unaware half boss blanket toddler faculty mountain perfect enter drastic ability omit..."
                                                    id="mnemonickey"
                                                    value={mnemonicKey}
                                                    onChange={(e) => setMnemonicKey(e.target.value)}
                                                ></textarea>
                                            </div>
                                            <span className='badge alert-warning'>
                                                {errors ? (
                                                    errors.mnemonicKey ? errors.mnemonicKey : ''
                                                ) : ''}
                                            </span>
                                        </div>

                                        <div className="form-group mb-4">
                                            <label htmlFor="schoolmail">Personnel Mail</label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                    <img src={process.env.PUBLIC_URL + "/assets/img/icons/email-svgrepo-com.svg"} alt="" />
                                                </span>
                                                <input
                                                    type="schoolmail"
                                                    className="form-control"
                                                    placeholder="2001ED0112@unijos.edu.ng"
                                                    id="schoolmail"
                                                    value={personnelMail}
                                                    onChange={(e) => setPersonnelMail(e.target.value)}
                                                />
                                            </div>
                                            <span className='badge alert-warning'>
                                                {errors ? (
                                                    errors.personnelMail ? errors.personnelMail : ''
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
                                        </div>
                                        <div className="d-grid">
                                            {loading ? (
                                                <button type="submit" className="btn btn-gray-800 mt-4">Loading...</button>
                                            ) : <button type="submit" className="btn btn-gray-800 mt-4">Sign in</button>}
                                        </div>
                                    </form>
                                    <div className="d-flex justify-content-center align-items-center mt-4 mb-5">
                                        <span className="fw-normal">
                                            Not registered?&nbsp;
                                            <Link to="/department/signup" className="fw-bold">Create account</Link>
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

export default DepartmentSignin
