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
	const [userId, setUserId] = useState(null);
	// const [authToken, setAuthToken] = useState(
	// 	JSON.stringify(cookies.get('connect.sid'))
	// );
	const [loggedIn, setLoggedIn] = useState(false);

	// useEffect(async () => {
	// 	await axios
	// 		.get('http://localhost:5000/login/', { withCredentials: true })
	// 		.then(function (response) {
	// 			let data = response.data;
	// 			setUsername(data.username);
	// 			setName(data.name);
	// 			setUserRole(data.role);
	// 			// setAuthToken(JSON.stringify(data));
	// 			setLoggedIn(true);
	// 		})
	// 		.catch(function (error) {
	// 			setLoggedIn(false);
	// 			// alert("Not logged in");
	// 			// return <Redirect to="/" />;
	// 		});
	// }, [loggedIn]);

	async function login(username, password) {
		// setUsername('user1');
		// setName('Name');
		// setUserRole('Role1');
		let data = {
			username: username,
			password: password,
		};
		await axios
			.post('http://localhost:5000/login', data, {
				headers: { 'Content-Type': 'application/json' },
			})
			.then(function (response) {
				let data = response.data;
				if (response.status === 200) {
					console.log(data);
					setUsername(data[1]);
					setName(data[3]);
					setUserRole(data[-1]);
					setUserId(data[0]);
					// setAuthToken(JSON.stringify(data));
					setLoggedIn(true);
					window.location.href = '/';
				}
			})
			.catch(function (error) {
				setLoggedIn(false);
				alert('Login Failed');
				return <Redirect to="/" />;
			});
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
