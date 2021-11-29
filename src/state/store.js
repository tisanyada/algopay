import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import thunk from 'redux-thunk'
import {
    loginReducer, registerReducer,
    createProfileReducer, paySchoolChargesReducer,
    payFacultyChargesReducer, payDepartmentChargesReducer,
    getSchoolReceiptReducer, getFacultyReceiptReducer,
    getDepartmentReceiptReducer, getProfileReducer,
    getAlgoBalanceReducer, getSchoolPaymentInfoReducer,
    getFacultyPaymentInfoReducer, getDepartmentPaymentInfoReducer
} from "./reducers/studentReducers"
import {
    facultySignupReducer, facultyLoginReducer,
    getUnverifiedSchoolReceiptsReducer, getVerifiedSchoolReceiptsReducer,
    facultyGetSchoolReceiptReducer, facultyVerifySchoolReceiptReducer,
    getUnverifiedFacultyReceiptsReducer, getVerifiedFacultyReceiptsReducer,
    facultyGetFacultyReceiptReducer, facultyVerifyFacultyReceiptReducer
} from './reducers/facultyReducers'
import {
    departmentGetDepartmentReceiptReducer,
    departmentGetVerifiedSchoolReceipts,
    departmentLoginReducer, departmentSignupReducer,
    departmentVerifyDepartmentReceiptReducer, getUnverifiedDepartmentReceiptsReducer,
    getVerifiedDepartmentReceiptsReducer
} from "./reducers/departmentReducers"



const reducer = combineReducers({
    auth: loginReducer,
    register: registerReducer,
    facultyAuth: facultyLoginReducer,
    facultyRegister: facultySignupReducer,
    departmentAuth: departmentLoginReducer,
    departmentRegister: departmentSignupReducer,
    algoAccountInfo: getAlgoBalanceReducer,
    createprofile: createProfileReducer,
    profile: getProfileReducer,
    schoolPaymentInfo: getSchoolPaymentInfoReducer,
    schoolpayment: paySchoolChargesReducer,
    facultyPaymentInfo: getFacultyPaymentInfoReducer,
    facultypayment: payFacultyChargesReducer,
    departmentPaymentInfo: getDepartmentPaymentInfoReducer,
    departmentpayment: payDepartmentChargesReducer,
    schoolreceipt: getSchoolReceiptReducer,
    facultyreceipt: getFacultyReceiptReducer,
    departmentreceipt: getDepartmentReceiptReducer,
    unverifiedSchoolReceipts: getUnverifiedSchoolReceiptsReducer,
    verifiedSchoolReceipts: getVerifiedSchoolReceiptsReducer,
    schoolReceipt: facultyGetSchoolReceiptReducer,
    verifySchoolReceipt: facultyVerifySchoolReceiptReducer,
    unverifiedFacultyReceipts: getUnverifiedFacultyReceiptsReducer,
    verifiedFacultyReceipts: getVerifiedFacultyReceiptsReducer,
    facultyReceipt: facultyGetFacultyReceiptReducer,
    verifyFacultyReceipt: facultyVerifyFacultyReceiptReducer,
    unverifiedDepartmentReceipts: getUnverifiedDepartmentReceiptsReducer,
    verifiedDepartmentReceipts: getVerifiedDepartmentReceiptsReducer,
    departmentReceipt: departmentGetDepartmentReceiptReducer,
    verifyDepartmentReceipt: departmentVerifyDepartmentReceiptReducer,
    departmentSchoolReceipts: departmentGetVerifiedSchoolReceipts
})

const StudentInfoFromLS = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : null
const StudentProfileFromLS = localStorage.getItem('studentprofile') ? JSON.parse(localStorage.getItem('studentprofile')) : null
const FacultyInfoFromLS = localStorage.getItem('faculty') ? JSON.parse(localStorage.getItem('faculty')) : null
const DepartmentInfoFromLS = localStorage.getItem('department') ? JSON.parse(localStorage.getItem('department')) : null
const initialState = {
    auth: { student: StudentInfoFromLS },
    profile: { studentprofile: StudentProfileFromLS },
    facultyAuth: { faculty: FacultyInfoFromLS },
    departmentAuth: { department: DepartmentInfoFromLS }
}

const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store