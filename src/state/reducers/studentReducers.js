import {
    STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, STUDENT_LOGIN_ERROR, STUDENT_LOGOUT,
    STUDENT_REGISTER_REQUEST, STUDENT_REGISTER_SUCCESS, STUDENT_REGISTER_ERROR,
    STUDENT_CREATE_PROFILE_REQUEST, STUDENT_CREATE_PROFILE_SUCCESS, STUDENT_CREATE_PROFILE_ERROR,
    GET_ALGOBALANCE_REQUEST, GET_ALGOBALANCE_SUCCESS, GET_ALGOBALANCE_ERROR,
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


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_LOGIN_REQUEST:
            return { loading: true }
        case STUDENT_LOGIN_SUCCESS:
            return { loading: false, student: action.payload }
        case STUDENT_LOGIN_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        case STUDENT_LOGOUT:
            return [...state]
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

export const getAlgoBalanceReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALGOBALANCE_REQUEST:
            return { loading: true }
        case GET_ALGOBALANCE_SUCCESS:
            return { loading: false, algoInfo: action.payload }
        case GET_ALGOBALANCE_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_GET_PROFILE_REQUEST:
            return { loading: true }
        case STUDENT_GET_PROFILE_SUCCESS:
            return { loading: false, studentprofile: action.payload }
        case STUDENT_GET_PROFILE_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getSchoolPaymentInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHOOLPAYMENTINFO_REQUEST:
            return { loading: true }
        case GET_SCHOOLPAYMENTINFO_SUCCESS:
            return { loading: false, schoolpaymentInfo: action.payload }
        case GET_SCHOOLPAYMENTINFO_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}
export const paySchoolChargesReducer = (state = {}, action) => {
    switch (action.type) {
        case PAY_SCHOOL_CHARGES_REQUEST:
            return { loading: true }
        case PAY_SCHOOL_CHARGES_SUCCESS:
            return { loading: false, schoolpayment: action.payload, message: 'payment successful' }
        case PAY_SCHOOL_CHARGES_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getFacultyPaymentInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FACULTYPAYMENTINFO_REQUEST:
            return { loading: true }
        case GET_FACULTYPAYMENTINFO_SUCCESS:
            return { loading: false, facultypaymentInfo: action.payload }
        case GET_FACULTYPAYMENTINFO_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}
export const payFacultyChargesReducer = (state = {}, action) => {
    switch (action.type) {
        case PAY_FACULTY_CHARGES_REQUEST:
            return { loading: true }
        case PAY_FACULTY_CHARGES_SUCCESS:
            return { loading: false, facultypayment: action.payload, message: 'payment successful' }
        case PAY_FACULTY_CHARGES_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getDepartmentPaymentInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DEPARTMENTPAYMENTINFO_REQUEST:
            return { loading: true }
        case GET_DEPARTMENTPAYMENTINFO_SUCCESS:
            return { loading: false, departmentpaymentInfo: action.payload }
        case GET_DEPARTMENTPAYMENTINFO_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}
export const payDepartmentChargesReducer = (state = {}, action) => {
    switch (action.type) {
        case PAY_DEPARTMENT_CHARGES_REQUEST:
            return { loading: true }
        case PAY_DEPARTMENT_CHARGES_SUCCESS:
            return { loading: false, departmentpayment: action.payload, message: 'payment successful' }
        case PAY_DEPARTMENT_CHARGES_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getSchoolReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHOOL_RECEIPT_REQUEST:
            return { loading: true }
        case GET_SCHOOL_RECEIPT_SUCCESS:
            return { loading: false, schoolreceipt: action.payload }
        case GET_SCHOOL_RECEIPT_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getFacultyReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FACULTY_RECEIPT_REQUEST:
            return { loading: true }
        case GET_FACULTY_RECEIPT_SUCCESS:
            return { loading: false, facultyreceipt: action.payload }
        case GET_FACULTY_RECEIPT_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}


export const getDepartmentReceiptReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DEPARTMENT_RECEIPT_REQUEST:
            return { loading: true }
        case GET_DEPARTMENT_RECEIPT_SUCCESS:
            return { loading: false, departmentreceipt: action.payload }
        case GET_DEPARTMENT_RECEIPT_ERROR:
            return { loading: false, errors: action.payload, error: action.error }
        default:
            return state
    }
}