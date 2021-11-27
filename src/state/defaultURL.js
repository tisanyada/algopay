let studentUrl
let facultyUrl
let departmentUrl

if (process.env.NODE_ENV === 'development') {
    // development
    studentUrl = "http://localhost:3001/students"
    facultyUrl = "http://localhost:3001/faculty"
    departmentUrl = "http://localhost:3001/department"
} else {
    // production
    studentUrl = "https://ujalgopay-server.herokuapp.com/students"
    facultyUrl = "https://ujalgopay-server.herokuapp.com/faculty"
    departmentUrl = "https://ujalgopay-server.herokuapp.com/department"
}


export {
    studentUrl,
    facultyUrl,
    departmentUrl
}