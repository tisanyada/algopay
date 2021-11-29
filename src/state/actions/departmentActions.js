import axios from 'axios'
import {
    DEPARTMENT_LOGIN_REQUEST, DEPARTMENT_LOGIN_SUCCESS, DEPARTMENT_LOGIN_ERROR, DEPARTMENT_LOGOUT,
    DEPARTMENT_REGISTER_REQUEST, DEPARTMENT_REGISTER_SUCCESS, DEPARTMENT_REGISTER_ERROR,
    GET_DEPARTMENTRECEIPT_REQUEST, GET_DEPARTMENTRECEIPT_SUCCESS, GET_DEPARTMENTRECEIPT_ERROR,
    GET_DEPARTMENTRECEIPTS_REQUEST, GET_DEPARTMENTRECEIPTS_ERROR, GET_UNVERIFIEDDEPARTMENTRECEIPTS_SUCCESS, GET_VERIFIEDDEPARTMENTRECEIPTS_SUCCESS,
    VERIFY_DEPARTMENTRECEIPT_REQUEST, VERIFY_DEPARTMENTRECEIPT_SUCCESS, VERIFY_DEPARTMENTRECEIPT_ERROR,
    GET_VERIFIEDSCHOOLRECEIPTS_REQUEST, GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS, GET_VERIFIEDSCHOOLRECEIPTS_ERROR
} from 'state/constants/departmentConstants'
import { departmentUrl } from 'state/defaultURL'



export const departmentLogin = (department) => async (dispatch) => {
    try {
        dispatch({ type: DEPARTMENT_LOGIN_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(departmentUrl + '/signin', department, config)
        dispatch({
            type: DEPARTMENT_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('department', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: DEPARTMENT_LOGIN_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const departmentLogout = () => dispatch => {
    localStorage.removeItem('department')
    dispatch({ type: DEPARTMENT_LOGOUT })
}


export const departmentSignup = (user) => async (dispatch) => {
    try {
        dispatch({ type: DEPARTMENT_REGISTER_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(departmentUrl + '/signup', user, config)
        dispatch({
            type: DEPARTMENT_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: DEPARTMENT_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('department', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: DEPARTMENT_REGISTER_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}



export const getUnverifiedDepartmentReceipts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_DEPARTMENTRECEIPTS_REQUEST })
        const { departmentAuth: { department } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': department.token
            }
        }
        const { data } = await axios.get(departmentUrl + `/receipts/department-unverified/${department.departmentName}`, config)
        dispatch({
            type: GET_UNVERIFIEDDEPARTMENTRECEIPTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_DEPARTMENTRECEIPTS_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const getVerifiedDepartmentReceipts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_DEPARTMENTRECEIPTS_REQUEST })
        const { departmentAuth: { department } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': department.token
            }
        }
        const { data } = await axios.get(departmentUrl + `/receipts/department-verified/${department.departmentName}`, config)
        dispatch({
            type: GET_VERIFIEDDEPARTMENTRECEIPTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_DEPARTMENTRECEIPTS_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const departmentGetDepartmentReceipt = (receiptId) => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_DEPARTMENTRECEIPT_REQUEST })
        const { departmentAuth: { department } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': department.token
            }
        }
        const { data } = await axios.get(departmentUrl + `/receipts/${receiptId}`, config)
        dispatch({
            type: GET_DEPARTMENTRECEIPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_DEPARTMENTRECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}


export const departmentVerifyDepartmentReceipt = (receiptId) => async (dispatch, getState) => {
    try {
        dispatch({ type: VERIFY_DEPARTMENTRECEIPT_REQUEST })
        const { departmentAuth: { department } } = getState()

        const config = {
            'Content-Type': 'application/json',
            'Authorization': department.token
        }
        const req = await fetch(departmentUrl + '/receipts/verify/' + receiptId, {
            method: 'PUT',
            mode: 'cors',
            headers: config
        })
        const data = await req.json()
        dispatch({
            type: VERIFY_DEPARTMENTRECEIPT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: VERIFY_DEPARTMENTRECEIPT_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}



export const departmentGetVerifiedSchoolReceipts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_VERIFIEDSCHOOLRECEIPTS_REQUEST })
        const { departmentAuth: { department } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': department.token
            }
        }
        const { data } = await axios.get(departmentUrl + `/receipts/school/${department.facultyName}/${department.departmentName}`, config)
        dispatch({
            type: GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_VERIFIEDSCHOOLRECEIPTS_ERROR,
            payload: error.response && error.response.data ? error.response.data : null,
            error: error.response && error.response.data ? error.response.data.message : null
        })
    }
}



