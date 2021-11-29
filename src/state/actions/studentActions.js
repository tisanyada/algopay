import axios from 'axios'
import {
    STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, STUDENT_LOGIN_ERROR, STUDENT_LOGOUT,
    STUDENT_REGISTER_REQUEST, STUDENT_REGISTER_SUCCESS, STUDENT_REGISTER_ERROR,
    GET_ALGOBALANCE_REQUEST, GET_ALGOBALANCE_SUCCESS, GET_ALGOBALANCE_ERROR,
    STUDENT_CREATE_PROFILE_SUCCESS, STUDENT_CREATE_PROFILE_ERROR, STUDENT_CREATE_PROFILE_REQUEST,
    STUDENT_GET_PROFILE_REQUEST, STUDENT_GET_PROFILE_SUCCESS, STUDENT_GET_PROFILE_ERROR,
    GET_SCHOOLPAYMENTINFO_REQUEST, GET_SCHOOLPAYMENTINFO_SUCCESS, GET_SCHOOLPAYMENTINFO_ERROR,
    PAY_SCHOOL_CHARGES_SUCCESS, PAY_SCHOOL_CHARGES_ERROR, PAY_SCHOOL_CHARGES_REQUEST,
    GET_FACULTYPAYMENTINFO_REQUEST, GET_FACULTYPAYMENTINFO_SUCCESS, GET_FACULTYPAYMENTINFO_ERROR,
    PAY_FACULTY_CHARGES_REQUEST, PAY_FACULTY_CHARGES_SUCCESS, PAY_FACULTY_CHARGES_ERROR,
    GET_DEPARTMENTPAYMENTINFO_REQUEST, GET_DEPARTMENTPAYMENTINFO_SUCCESS, GET_DEPARTMENTPAYMENTINFO_ERROR,
    PAY_DEPARTMENT_CHARGES_SUCCESS, PAY_DEPARTMENT_CHARGES_ERROR, PAY_DEPARTMENT_CHARGES_REQUEST,
    GET_SCHOOL_RECEIPT_REQUEST, GET_SCHOOL_RECEIPT_SUCCESS, GET_SCHOOL_RECEIPT_ERROR,
    GET_FACULTY_RECEIPT_REQUEST, GET_FACULTY_RECEIPT_SUCCESS, GET_FACULTY_RECEIPT_ERROR,
    GET_DEPARTMENT_RECEIPT_REQUEST, GET_DEPARTMENT_RECEIPT_SUCCESS, GET_DEPARTMENT_RECEIPT_ERROR
} from 'state/constants/studentConstants'
import { studentUrl } from 'state/defaultURL'


export const loginStudent = (student) => async (dispatch) => {
    try {
        dispatch({ type: STUDENT_LOGIN_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(studentUrl + '/signin', student, config)
        dispatch({
            type: STUDENT_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('student', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: STUDENT_LOGIN_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const logoutStudent = () => dispatch => {
    localStorage.removeItem('student')
    localStorage.removeItem('studentprofile')
    localStorage.removeItem('schoolpayment')
    dispatch({ type: STUDENT_LOGOUT })
}


export const createStudent = (user) => async (dispatch) => {
    try {
        dispatch({ type: STUDENT_REGISTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(studentUrl + '/signup', user, config)
        dispatch({
            type: STUDENT_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: STUDENT_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('student', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: STUDENT_REGISTER_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const createProfile = (userdata) => async (dispatch, getState) => {
    try {
        dispatch({ type: STUDENT_CREATE_PROFILE_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': student.token
            }
        }
        const { data } = await axios.post(studentUrl + '/create-profile', userdata, config)
        dispatch({
            type: STUDENT_CREATE_PROFILE_SUCCESS,
            payload: data
        })
        localStorage.setItem('studentprofile', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: STUDENT_CREATE_PROFILE_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getAlgoBalance = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALGOBALANCE_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/get-algobalance', config)
        dispatch({
            type: GET_ALGOBALANCE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALGOBALANCE_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getProfile = () => async (dispatch, getState) => {
    try {
        dispatch({ type: STUDENT_GET_PROFILE_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/get-profile', config)
        dispatch({
            type: STUDENT_GET_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: STUDENT_GET_PROFILE_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getSchoolPaymentInfo = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_SCHOOLPAYMENTINFO_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/payments/school-info', config)
        dispatch({
            type: GET_SCHOOLPAYMENTINFO_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: GET_SCHOOLPAYMENTINFO_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}
export const paySchoolCharges = (paymentdata) => async (dispatch, getState) => {
    try {
        dispatch({ type: PAY_SCHOOL_CHARGES_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.post(studentUrl + '/payments/school', paymentdata, config)
        dispatch({
            type: PAY_SCHOOL_CHARGES_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: PAY_SCHOOL_CHARGES_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getFacultyPaymentInfo = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_FACULTYPAYMENTINFO_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/payments/faculty-info', config)
        dispatch({
            type: GET_FACULTYPAYMENTINFO_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: GET_FACULTYPAYMENTINFO_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}
export const payFacultyCharges = (paymentdata) => async (dispatch, getState) => {
    try {
        dispatch({ type: PAY_FACULTY_CHARGES_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.post(studentUrl + '/payments/faculty', paymentdata, config)
        dispatch({
            type: PAY_FACULTY_CHARGES_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: PAY_FACULTY_CHARGES_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getDepartmentPaymentInfo = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_DEPARTMENTPAYMENTINFO_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/payments/department-info', config)
        dispatch({
            type: GET_DEPARTMENTPAYMENTINFO_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: GET_DEPARTMENTPAYMENTINFO_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}
export const payDepartmentCharges = (paymentdata) => async (dispatch, getState) => {
    try {
        dispatch({ type: PAY_DEPARTMENT_CHARGES_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.post(studentUrl + '/payments/department', paymentdata, config)
        dispatch({
            type: PAY_DEPARTMENT_CHARGES_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: PAY_DEPARTMENT_CHARGES_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getSchoolReceipt = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_SCHOOL_RECEIPT_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/receipts/school', config)
        dispatch({
            type: GET_SCHOOL_RECEIPT_SUCCESS,
            payload: data
        })
        console.log(data)
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: GET_SCHOOL_RECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getFacultyReceipt = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_FACULTY_RECEIPT_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/receipts/faculty', config)
        dispatch({
            type: GET_FACULTY_RECEIPT_SUCCESS,
            payload: data
        })
        console.log(data)
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: GET_FACULTY_RECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getDepartmentReceipt = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_DEPARTMENT_RECEIPT_REQUEST })

        const { auth: { student } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': student.token
            }
        }
        const { data } = await axios.get(studentUrl + '/receipts/department', config)
        dispatch({
            type: GET_DEPARTMENT_RECEIPT_SUCCESS,
            payload: data
        })
        console.log(data)
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: GET_DEPARTMENT_RECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}