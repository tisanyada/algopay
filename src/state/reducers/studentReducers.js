import {
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGIN_ERROR,
    STUDENT_LOGOUT,
    STUDENT_REGISTER_REQUEST,
    STUDENT_REGISTER_SUCCESS,
    STUDENT_REGISTER_ERROR,
    STUDENT_CREATE_PROFILE_REQUEST,
    STUDENT_CREATE_PROFILE_SUCCESS,
    STUDENT_CREATE_PROFILE_ERROR
} from 'state/constants/studentConstants'


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_LOGIN_REQUEST:
            return { loading: true }
        case STUDENT_LOGIN_SUCCESS:
            return { loading: false, student: action.payload }
        case STUDENT_LOGIN_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        case STUDENT_LOGOUT:
            return {}
        default:
            return state
    }
}


export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_REGISTER_REQUEST:
            return { loading: true }
        case STUDENT_REGISTER_SUCCESS:
            return { loading: false, student: action.payload }
        case STUDENT_REGISTER_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const createProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_CREATE_PROFILE_REQUEST:
            return { loading: true }
        case STUDENT_CREATE_PROFILE_SUCCESS:
            return { loading: false, studentprofile: action.payload }
        case STUDENT_CREATE_PROFILE_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}