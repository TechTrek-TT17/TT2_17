import './index.css';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Home } from './Pages/Home';

export const App = () => {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
			</Switch>
		</Router>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
