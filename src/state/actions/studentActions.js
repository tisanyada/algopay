import axios from 'axios'
import {
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGIN_ERROR,
    STUDENT_LOGOUT,
    STUDENT_REGISTER_REQUEST,
    STUDENT_REGISTER_SUCCESS,
    STUDENT_REGISTER_ERROR,
    STUDENT_CREATE_PROFILE_SUCCESS,
STUDENT_CREATE_PROFILE_ERROR,
    STUDENT_CREATE_PROFILE_REQUEST
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