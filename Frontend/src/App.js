import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import PrivateRoute from './routes/PrivateRoute';

import Login from './Pages/login';
import { Home } from './Pages/Home';
import AdminLayout from 'layouts/Admin.js';

function App(props) {
	return (
		<AuthProvider>
			<Router>
				<Route exact path="/" component={Login} />
				{/* <PrivateRoute path="/home" component={Home} /> */}
				<PrivateRoute path="/admin" component={AdminLayout} />
			</Router>
		</AuthProvider>
	);
}

export default App;
