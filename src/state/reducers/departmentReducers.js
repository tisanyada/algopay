import {
    DEPARTMENT_LOGIN_REQUEST, DEPARTMENT_LOGIN_SUCCESS, DEPARTMENT_LOGIN_ERROR, DEPARTMENT_LOGOUT,
    DEPARTMENT_REGISTER_REQUEST, DEPARTMENT_REGISTER_SUCCESS, DEPARTMENT_REGISTER_ERROR,
    GET_DEPARTMENTRECEIPTS_REQUEST, GET_DEPARTMENTRECEIPTS_ERROR,
    GET_UNVERIFIEDDEPARTMENTRECEIPTS_SUCCESS, GET_VERIFIEDDEPARTMENTRECEIPTS_SUCCESS,
    GET_DEPARTMENTRECEIPT_REQUEST, GET_DEPARTMENTRECEIPT_SUCCESS, GET_DEPARTMENTRECEIPT_ERROR,
    VERIFY_DEPARTMENTRECEIPT_REQUEST, VERIFY_DEPARTMENTRECEIPT_SUCCESS, VERIFY_DEPARTMENTRECEIPT_ERROR,
    GET_VERIFIEDSCHOOLRECEIPTS_REQUEST, GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS, GET_VERIFIEDSCHOOLRECEIPTS_ERROR
} from 'state/constants/departmentConstants'


export const departmentLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case DEPARTMENT_LOGIN_REQUEST:
            return { loading: true }
        case DEPARTMENT_LOGIN_SUCCESS:
            return { loading: false, department: action.payload }
        case DEPARTMENT_LOGIN_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        case DEPARTMENT_LOGOUT:
            return [...state]
        default:
            return state
    }
}


export const departmentSignupReducer = (state = {}, action) => {
    switch (action.type) {
        case DEPARTMENT_REGISTER_REQUEST:
            return { loading: true }
        case DEPARTMENT_REGISTER_SUCCESS:
            return { loading: false, department: action.payload }
        case DEPARTMENT_REGISTER_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getUnverifiedDepartmentReceiptsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DEPARTMENTRECEIPTS_REQUEST:
            return { loading: true }
        case GET_UNVERIFIEDDEPARTMENTRECEIPTS_SUCCESS:
            return { loading: false, unverifieddepartmentreceipts: action.payload }
        case GET_DEPARTMENTRECEIPTS_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getVerifiedDepartmentReceiptsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DEPARTMENTRECEIPTS_REQUEST:
            return { loading: true }
        case GET_VERIFIEDDEPARTMENTRECEIPTS_SUCCESS:
            return { loading: false, verifieddepartmentreceipts: action.payload }
        case GET_DEPARTMENTRECEIPTS_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const departmentGetDepartmentReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DEPARTMENTRECEIPT_REQUEST:
            return { loading: true }
        case GET_DEPARTMENTRECEIPT_SUCCESS:
            return { loading: false, departmentreceipt: action.payload }
        case GET_DEPARTMENTRECEIPT_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const departmentVerifyDepartmentReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case VERIFY_DEPARTMENTRECEIPT_REQUEST:
            return { vloading: true }
        case VERIFY_DEPARTMENTRECEIPT_SUCCESS:
            return { vloading: false, verifieddepartmentreceipt: action.payload }
        case VERIFY_DEPARTMENTRECEIPT_ERROR:
            return { vloading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const departmentGetVerifiedSchoolReceipts = (state = {}, action) => {
    switch (action.type) {
        case GET_VERIFIEDSCHOOLRECEIPTS_REQUEST:
            return { loading: true }
        case GET_VERIFIEDSCHOOLRECEIPTS_SUCCESS:
            return { loading: false, verifiedschoolreceipts: action.payload }
        case GET_VERIFIEDSCHOOLRECEIPTS_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}