import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import PrivateRoute from './routes/PrivateRoute';

import Login from './Pages/login';
import { Home } from './Pages/Home';
import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';

function App(props) {
	return (
		<AuthProvider>
			<Router>
				<Redirect from="/" to="/admin/index" />
				<Route
					path="/auth"
					render={(props) => <AuthLayout {...props} />}
				/>
				{/* <PrivateRoute path="/home" component={Home} /> */}
				<PrivateRoute path="/admin" component={AdminLayout} />
			</Router>
		</AuthProvider>
	);
}

export default App;
