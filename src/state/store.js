import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import { loginReducer, registerReducer, createProfileReducer } from "./reducers/studentReducers"


const reducer = combineReducers({
    auth: loginReducer,
    register: registerReducer,
    profile: createProfileReducer
})

const StudentInfoFromLS = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : null
const StudentProfileFromLS = localStorage.getItem('studentprofile') ? JSON.parse(localStorage.getItem('studentprofile')) : null
const initialState = {
    auth: { student: StudentInfoFromLS },
    profile: { studentprofile: StudentProfileFromLS }
}

const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store