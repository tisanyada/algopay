import axios from 'axios'
import {
    FACULTY_LOGIN_REQUEST, FACULTY_LOGIN_SUCCESS, FACULTY_LOGIN_ERROR, FACULTY_LOGOUT,
    FACULTY_REGISTER_REQUEST, FACULTY_REGISTER_SUCCESS, FACULTY_REGISTER_ERROR,
    GET_SCHOOLRECEIPT_REQUEST, GET_SCHOOLRECEIPT_SUCCESS, GET_SCHOOLRECEIPT_ERROR,
    GET_SCHOOLRECEIPTS_REQUEST, GET_SCHOOLRECEIPTS_ERROR, GET_UNVERIFIEDSCHOOLRECEIPTS_SUCCESS, GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS,
    VERIFY_SCHOOLRECEIPT_REQUEST, VERIFY_SCHOOLRECEIPT_SUCCESS, VERIFY_SCHOOLRECEIPT_ERROR,
    GET_FACULTYRECEIPTS_REQUEST, GET_FACULTYRECEIPTS_ERROR,
    GET_UNVERIFIEDFACULTYRECEIPTS_SUCCESS, GET_VERIFIEDFACULTYRECEIPTS_SUCCESS,
    GET_FACULTYRECEIPT_REQUEST, GET_FACULTYRECEIPT_SUCCESS, GET_FACULTYRECEIPT_ERROR,
    VERIFY_FACULTYRECEIPT_REQUEST, VERIFY_FACULTYRECEIPT_SUCCESS, VERIFY_FACULTYRECEIPT_ERROR
} from 'state/constants/facultyConstants'
import { facultyUrl } from 'state/defaultURL'



export const facultyLogin = (faculty) => async (dispatch) => {
    try {
        dispatch({ type: FACULTY_LOGIN_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(facultyUrl + '/signin', faculty, config)
        dispatch({
            type: FACULTY_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('faculty', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: FACULTY_LOGIN_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const facultyLogout = () => dispatch => {
    localStorage.removeItem('faculty')
    dispatch({ type: FACULTY_LOGOUT })
}


export const facultySignup = (user) => async (dispatch) => {
    try {
        dispatch({ type: FACULTY_REGISTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(facultyUrl + '/signup', user, config)
        dispatch({
            type: FACULTY_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: FACULTY_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('faculty', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: FACULTY_REGISTER_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}



export const getUnverifiedSchoolReceipts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_SCHOOLRECEIPTS_REQUEST })
        const { facultyAuth: { faculty } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': faculty.token
            }
        }
        const { data } = await axios.get(facultyUrl + `/receipts/school-unverified/${faculty.facultyName}`, config)
        dispatch({
            type: GET_UNVERIFIEDSCHOOLRECEIPTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SCHOOLRECEIPTS_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getVerifiedSchoolReceipts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_SCHOOLRECEIPTS_REQUEST })
        const { facultyAuth: { faculty } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': faculty.token
            }
        }
        const { data } = await axios.get(facultyUrl + `/receipts/school-verified/${faculty.facultyName}`, config)
        dispatch({
            type: GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SCHOOLRECEIPTS_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const facultyGetSchoolReceipt = (receiptId) => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_SCHOOLRECEIPT_REQUEST })
        const { facultyAuth: { faculty } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': faculty.token
            }
        }
        const { data } = await axios.get(facultyUrl + `/receipts/${receiptId}`, config)
        dispatch({
            type: GET_SCHOOLRECEIPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_SCHOOLRECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const facultyVerifySchoolReceipt = (receiptId) => async (dispatch, getState) => {
    try {
        dispatch({ type: VERIFY_SCHOOLRECEIPT_REQUEST })
        const { facultyAuth: { faculty } } = getState()

        const config = {
            'Content-Type': 'application/json',
            'Authorization': faculty.token
        }
        const req = await fetch(facultyUrl + '/receipts/verify/' + receiptId, {
            method: 'PUT',
            mode: 'cors',
            headers: config
        })
        const data = await req.json()
        dispatch({
            type: VERIFY_SCHOOLRECEIPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: VERIFY_SCHOOLRECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}



export const getUnverifiedFacultyReceipts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_FACULTYRECEIPTS_REQUEST })
        const { facultyAuth: { faculty } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': faculty.token
            }
        }
        const { data } = await axios.get(facultyUrl + `/receipts/faculty-unverified/${faculty.facultyName}`, config)
        dispatch({
            type: GET_UNVERIFIEDFACULTYRECEIPTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_FACULTYRECEIPTS_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getVerifiedFacultyReceipts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_FACULTYRECEIPTS_REQUEST })
        const { facultyAuth: { faculty } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': faculty.token
            }
        }
        const { data } = await axios.get(facultyUrl + `/receipts/faculty-verified/${faculty.facultyName}`, config)
        dispatch({
            type: GET_VERIFIEDFACULTYRECEIPTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_FACULTYRECEIPTS_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const facultyGetFacultyReceipt = (receiptId) => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_FACULTYRECEIPT_REQUEST })
        const { facultyAuth: { faculty } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': faculty.token
            }
        }
        const { data } = await axios.get(facultyUrl + `/receipts/${receiptId}`, config)
        dispatch({
            type: GET_FACULTYRECEIPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_FACULTYRECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const facultyVerifyFacultyReceipt = (receiptId) => async (dispatch, getState) => {
    try {
        dispatch({ type: VERIFY_FACULTYRECEIPT_REQUEST })
        const { facultyAuth: { faculty } } = getState()
        const config = {
            'Content-Type': 'application/json',
            'Authorization': faculty.token
        }
        const req = await fetch(facultyUrl + '/receipts/verify/' + receiptId, {
            method: 'PUT',
            mode: 'cors',
            headers: config
        })
        const data = await req.json()
        dispatch({
            type: VERIFY_FACULTYRECEIPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: VERIFY_FACULTYRECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}