import React, { createContext, useContext, useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

const AuthContext = createContext({});
// const cookies = new Cookies();
const axios = require('axios');

function AuthProvider(props) {
	let role = null;
	const [username, setUsername] = useState(null);
	const [name, setName] = useState(null);
	const [userRole, setUserRole] = useState(null);
	// const [authToken, setAuthToken] = useState(
	// 	JSON.stringify(cookies.get('connect.sid'))
	// );
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(async () => {
		await axios
			.get('http://localhost:5000/user/', { withCredentials: true })
			.then(function (response) {
				let data = response.data;
				let userDetails = data.userDetails;
				setUsername(data.userName);
				setName(userDetails.name);
				setUserRole(userDetails.role);
				// setAuthToken(JSON.stringify(data));
				setLoggedIn(true);
			})
			.catch(function (error) {
				setLoggedIn(false);
				// alert("Not logged in");
				// return <Redirect to="/" />;
			});
	}, [loggedIn]);

	async function login(username, password) {
		// await axios.get('http://localhost:5000/user/login', {
		// 	params: {
		// 		username: username,
		// 		password: password,
		// }).then(function (response) {
		// 		let data = response.data;
		// 		if (response.status === 200) {

		// 		let userDetails = data.userDetails;
		// 		setUsername(data.userName);
		// 		setName(userDetails.name);
		// 		setUserRole(userDetails.role);
		// 		// setAuthToken(JSON.stringify(data));
		// 		setLoggedIn(true);
		// 	}
	}

	const logout = () => {
		// cookies.remove("connect.sid");
		setUsername(null);
		// setAuthToken(null);
		setLoggedIn(false);
		window.location.href = '/';
	};

	return (
		<AuthContext.Provider
			value={{
				loggedIn,
				username,
				name,
				// authToken,
				userRole,
				login,
				logout,
				setUserRole,
			}}
			{...props}
		/>
	);
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
