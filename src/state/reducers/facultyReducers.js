import {
    FACULTY_LOGIN_REQUEST, FACULTY_LOGIN_SUCCESS, FACULTY_LOGIN_ERROR, FACULTY_LOGOUT,
    FACULTY_REGISTER_REQUEST, FACULTY_REGISTER_SUCCESS, FACULTY_REGISTER_ERROR,
    GET_UNVERIFIEDSCHOOLRECEIPTS_SUCCESS, GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS,
    GET_SCHOOLRECEIPTS_REQUEST, GET_SCHOOLRECEIPTS_ERROR,
    GET_SCHOOLRECEIPT_REQUEST, GET_SCHOOLRECEIPT_SUCCESS, GET_SCHOOLRECEIPT_ERROR,
    VERIFY_SCHOOLRECEIPT_REQUEST, VERIFY_SCHOOLRECEIPT_SUCCESS, VERIFY_SCHOOLRECEIPT_ERROR,
    GET_FACULTYRECEIPTS_REQUEST, GET_FACULTYRECEIPTS_ERROR,
    GET_UNVERIFIEDFACULTYRECEIPTS_SUCCESS, GET_VERIFIEDFACULTYRECEIPTS_SUCCESS,
    GET_FACULTYRECEIPT_REQUEST, GET_FACULTYRECEIPT_SUCCESS, GET_FACULTYRECEIPT_ERROR,
    VERIFY_FACULTYRECEIPT_REQUEST, VERIFY_FACULTYRECEIPT_SUCCESS, VERIFY_FACULTYRECEIPT_ERROR
} from 'state/constants/facultyConstants'


export const facultyLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case FACULTY_LOGIN_REQUEST:
            return { loading: true }
        case FACULTY_LOGIN_SUCCESS:
            return { loading: false, faculty: action.payload }
        case FACULTY_LOGIN_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        case FACULTY_LOGOUT:
            return [...state]
        default:
            return state
    }
}


export const facultySignupReducer = (state = {}, action) => {
    switch (action.type) {
        case FACULTY_REGISTER_REQUEST:
            return { loading: true }
        case FACULTY_REGISTER_SUCCESS:
            return { loading: false, faculty: action.payload }
        case FACULTY_REGISTER_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getUnverifiedSchoolReceiptsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHOOLRECEIPTS_REQUEST:
            return { loading: true }
        case GET_UNVERIFIEDSCHOOLRECEIPTS_SUCCESS:
            return { loading: false, unverifiedschoolreceipts: action.payload }
        case GET_SCHOOLRECEIPTS_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getVerifiedSchoolReceiptsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHOOLRECEIPTS_REQUEST:
            return { loading: true }
        case GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS:
            return { loading: false, verifiedschoolreceipts: action.payload }
        case GET_SCHOOLRECEIPTS_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const facultyGetSchoolReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHOOLRECEIPT_REQUEST:
            return { loading: true }
        case GET_SCHOOLRECEIPT_SUCCESS:
            return { loading: false, schoolreceipt: action.payload }
        case GET_SCHOOLRECEIPT_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const facultyVerifySchoolReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case VERIFY_SCHOOLRECEIPT_REQUEST:
            return { vloading: true }
        case VERIFY_SCHOOLRECEIPT_SUCCESS:
            return { vloading: false, verifiedschoolreceipt: action.payload }
        case VERIFY_SCHOOLRECEIPT_ERROR:
            return { vloading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getUnverifiedFacultyReceiptsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FACULTYRECEIPTS_REQUEST:
            return { loading: true }
        case GET_UNVERIFIEDFACULTYRECEIPTS_SUCCESS:
            return { loading: false, unverifiedfacultyreceipts: action.payload }
        case GET_FACULTYRECEIPTS_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getVerifiedFacultyReceiptsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FACULTYRECEIPTS_REQUEST:
            return { loading: true }
        case GET_VERIFIEDFACULTYRECEIPTS_SUCCESS:
            return { loading: false, verifiedfacultyreceipts: action.payload }
        case GET_FACULTYRECEIPTS_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const facultyGetFacultyReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FACULTYRECEIPT_REQUEST:
            return { loading: true }
        case GET_FACULTYRECEIPT_SUCCESS:
            return { loading: false, facultyreceipt: action.payload }
        case GET_FACULTYRECEIPT_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const facultyVerifyFacultyReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case VERIFY_FACULTYRECEIPT_REQUEST:
            return { vloading: true }
        case VERIFY_FACULTYRECEIPT_SUCCESS:
            return { vloading: false, verifiedfacultyreceipt: action.payload }
        case VERIFY_FACULTYRECEIPT_ERROR:
            return { vloading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}