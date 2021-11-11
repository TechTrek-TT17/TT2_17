import React, { useState } from 'react';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
	FormControl,
	Button,
	Container,
    TextField
} from '@mui/material';

const Login = (props) => {
	const [user, setUsername] = useState('');
	const [pass, setPassword] = useState('');
	const [loginError, setLoginError] = useState(false);
	const submit = (e) => {
        console.log("Submitting!")
		e.preventDefault();
		if (user === 'user') {
			props.setIsAuthenticated(true);
		}
		axios
			.post('http://localhost:8000/api-token-auth/', {
				username: user,
				password: pass,
			})
			.then((res) => {
				props.setIsAuthenticated(true);
			})
			.catch((error) => {
				setLoginError(true);
			});
	};
	return (
		<Container align="center">
			<h1>Welcome to Budget Management App!</h1>
			<div>
				<AccountCircleIcon style={{ fontSize: 200 }} />
			</div>
			<FormControl>

				<TextField
                    label="Username"
					type="text"
					autoComplete="off"
					id="username"
					name="username"
					placeholder="Username"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>

                <br/>
				<TextField
                    label="Password"
					type="password"
					autoComplete="off"
					id="password"
					name="password"
					placeholder="Password"
					onChange={(e) => {
						setPassword(e.target.value);
                        console.log(pass);
					}}
				/>

				{loginError && (
					<div id="errorMessage" className="generic-error">
						<p style={{fontSize: "0.8em", color:"red"}}> The credentials you have entered is not valid.</p>
					</div>
				)}
				<br/>
				<Button variant="contained" type="submit" onClick={submit}>
					SUBMIT
				</Button>
			</FormControl>
		</Container>
	);
};

export default Login;
