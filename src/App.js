import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Signin from 'pages/student/Signin'
import Signup from 'pages/student/Signup'
import Dashboard from 'pages/student/Dashboard'
import SchoolPayment from 'pages/student/SchoolPayment'
import NotFound from 'pages/student/NotFound'
import FacultyPayment from 'pages/student/FacultyPayment'
import DepartmentPayment from 'pages/student/DepartmentPayment'
import SchoolReceipt from 'pages/student/SchoolReceipt'
import FacultyReceipt from 'pages/student/FacultyReceipt'
import DepartmentReceipt from 'pages/student/DepartmentReceipt'
import FacultySignin from 'pages/faculty/FacultySignin'
import FacultySignup from 'pages/faculty/FacultySignup'
import FacultyDashboard from 'pages/faculty/FacultyDashboard'
import SchoolReceipts from 'pages/faculty/SchoolReceipts'
import VerifySchoolReceipt from 'components/FacultyDashboard/VerifySchoolReceipt'
import FacultyReceipts from 'pages/faculty/FacultyReceipts'
import VerifyFacultyReceipt from 'components/FacultyDashboard/VerifyFacultyReceipt'
import DepartmentSignin from 'pages/department/DepartmentSignin'
import DepartmentSignup from 'pages/department/DepartmentSignup'
import DepartmentDashboard from 'pages/department/DepartmentDashboard'
import DepartmentsReceipts from 'pages/department/DepartmentReceipts'
import VerifyDepartmentReceipt from 'components/DepartmentDashboard/VerifyDepartmentReceipt'
import DepartmentSchoolReceipts from 'pages/department/DepartmentSchoolReceipts'
import CreateProfile from 'components/StudentDashboard/CreateProfile'
import Documentation from 'pages/Documentation'




function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/docs" exact element={<Documentation />} />

				{/* student */}
				<Route path="/signin" exact element={<Signin />} />
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/dashboard" exact element={<Dashboard />} />
				<Route path="/dashboard/school-payment" exact element={<SchoolPayment />} />
				<Route path="/dashboard/createprofile" exact element={<CreateProfile />} />
				<Route path="/dashboard/faculty-payment" exact element={<FacultyPayment />} />
				<Route path="/dashboard/department-payment" exact element={<DepartmentPayment />} />
				<Route path="/receipts/schoolcharges" exact element={<SchoolReceipt />} />
				<Route path="/receipts/facultycharges" exact element={<FacultyReceipt />} />
				<Route path="/receipts/departmentcharges" exact element={<DepartmentReceipt />} />

				{/* faculty */}
				<Route path="/faculty/signin" exact element={<FacultySignin />} />
				<Route path="/faculty/signup" exact element={<FacultySignup />} />
				<Route path="/faculty/dashboard" exact element={<FacultyDashboard />} />
				<Route path="/faculty/receipts/schoolcharges" exact element={<SchoolReceipts />} />
				<Route path="/faculty/receipts/sr-verify/:receiptId" exact element={<VerifySchoolReceipt />} />
				<Route path="/faculty/receipts/facultycharges" exact element={<FacultyReceipts />} />
				<Route path="/faculty/receipts/fr-verify/:receiptId" exact element={<VerifyFacultyReceipt />} />

				{/* faculty */}
				<Route path="/department/signin" exact element={<DepartmentSignin />} />
				<Route path="/department/signup" exact element={<DepartmentSignup />} />
				<Route path="/department/dashboard" exact element={<DepartmentDashboard />} />
				<Route path="/department/receipts/schoolcharges" exact element={<DepartmentSchoolReceipts />} />
				<Route path="/department/receipts/departmentcharges" exact element={<DepartmentsReceipts />} />
				<Route path="/department/receipts/dpt-verify/:receiptId" exact element={<VerifyDepartmentReceipt />} />

				{/* 404 */}
				<Route path="*" exact element={<NotFound />} />
			</Routes>
		</Router>
	)
}


export default App
