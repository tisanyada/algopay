import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from 'state/store'
import './css/volt.css'
import './css/notyf/notyf.min.css'
import './css/sweetalert2/dist/sweetalert2.min.css'
import '@popperjs/core/dist/cjs/popper'
import 'bootstrap/dist/js/bootstrap'



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)


