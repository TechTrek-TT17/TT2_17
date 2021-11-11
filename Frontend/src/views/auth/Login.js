import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui/icons components
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';

import { useAuth } from '../../context/auth';

// core components
import componentStyles from 'assets/theme/views/auth/login.js';

const useStyles = makeStyles(componentStyles);

function Login() {
	const classes = useStyles();
	const theme = useTheme();
	const { login } = useAuth();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const signIn = () => {
		return login(email, password);
	};

	return (
		<>
			<Grid item xs={12} lg={5} md={7}>
				<Card classes={{ root: classes.cardRoot }}>
					<CardContent classes={{ root: classes.cardContent }}>
						<Box
							color={theme.palette.gray[600]}
							textAlign="center"
							marginBottom="1rem"
							marginTop=".5rem"
							fontSize="1rem"
						>
							<Box fontWeight="bold">
								Sign In With Credentials
							</Box>
						</Box>
						<FormControl
							variant="filled"
							component={Box}
							width="100%"
							marginBottom="1rem!important"
						>
							<FilledInput
								onChange={(e) => setEmail(e.target.value)}
								autoComplete="off"
								type="email"
								placeholder="Email"
								startAdornment={
									<InputAdornment position="start">
										<Email />
									</InputAdornment>
								}
							/>
						</FormControl>
						<FormControl
							variant="filled"
							component={Box}
							width="100%"
							marginBottom="1rem!important"
						>
							<FilledInput
								onChange={(e) => setPassword(e.target.value)}
								autoComplete="off"
								type="password"
								placeholder="Password"
								startAdornment={
									<InputAdornment position="start">
										<Lock />
									</InputAdornment>
								}
							/>
						</FormControl>
						<Box
							textAlign="center"
							marginTop="1.5rem"
							marginBottom="1.5rem"
						>
							<Button
								color="primary"
								variant="contained"
								onClick={signIn}
							>
								Sign in
							</Button>
						</Box>
					</CardContent>
				</Card>
				{/* <Grid container component={Box} marginTop="1rem">
					<Grid item xs={6} component={Box} textAlign="left">
						<a
							href="#admui"
							onClick={(e) => e.preventDefault()}
							className={classes.footerLinks}
						>
							Forgot password
						</a>
					</Grid>
					<Grid item xs={6} component={Box} textAlign="right">
						<a
							href="#admui"
							onClick={(e) => e.preventDefault()}
							className={classes.footerLinks}
						>
							Create new account
						</a>
					</Grid>
				</Grid> */}
			</Grid>
		</>
	);
}

export default Login;
