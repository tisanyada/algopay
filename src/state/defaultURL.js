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
    // studentUrl = "https://algopay-server.herokuapp.com/students"
    // facultyUrl = "https://algopay-server.herokuapp.com/faculty"
    // departmentUrl = "https://algopay-server.herokuapp.com/department"
    
    studentUrl = "https://algopay-server.onrender.com/students"
    facultyUrl = "https://algopay-server.onrender.com/faculty"
    departmentUrl = "https://algopay-server.onrender.com/department"
}


export {
    studentUrl,
    facultyUrl,
    departmentUrl
}
