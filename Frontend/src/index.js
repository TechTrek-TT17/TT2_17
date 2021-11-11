import './index.css';
import reportWebVitals from './reportWebVitals';

import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './Pages/login';


import { Home } from './Pages/Home';

export const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<>
		{isAuthenticated ? (
			<Router setIsAuthenticated={setIsAuthenticated}>
				{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
				</Switch>
			</Router>):(<Login setIsAuthenticated={setIsAuthenticated}/>)}
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
