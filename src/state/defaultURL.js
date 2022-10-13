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
    studentUrl1="https://web-production-6f07.up.railway.app/students"
    facultyUrl="https://web-production-6f07.up.railway.app/faculty"
    departmentUrl="https://web-production-6f07.up.railway.app/department"
}


export {
    studentUrl,
    facultyUrl,
    departmentUrl
}
