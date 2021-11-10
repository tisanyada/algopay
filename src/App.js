import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Signin from 'pages/Signin'
import Signup from 'pages/Signup'
import Dashboard from 'pages/Dashboard'
// import SchoolPayment from 'pages/SchoolPayment'
import NotFound from 'pages/NotFound'



function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/signin" exact element={<Signin />} />
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/dashboard" exact element={<Dashboard />} />
				{/* <Route path="/dashboard/school-payment" exact element={<SchoolPayment />} /> */}

				{/* 404 */}
				<Route path="*" exact element={<NotFound />} />
			</Routes>
		</Router>
	)
}


export default App
