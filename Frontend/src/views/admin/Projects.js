import React, { useState, useEffect } from 'react';
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

// core components
import Header from 'components/Headers/Header.js';
import ControlledAccordions from '../../components/Accordian';

import componentStyles from 'assets/theme/views/admin/icons.js';
import { useAuth } from '../../context/auth';

const useStyles = makeStyles(componentStyles);

const Projects = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [copiedText, setCopiedText] = useState();
	const [projectAccordians, setProjectAccordians] = useState([]);
	const { userId } = useAuth();

	useEffect(async () => {
		console.log(userId);
		await axios.get('http://localhost:5000/projects/1').then((res) => {
			let data = res.data.data;
			console.log(data);
			setProjectAccordians(data);
		});
	}, []);

	return (
		<>
			<Header />
			{/* Page content */}
			<Container
				maxWidth={false}
				component={Box}
				marginTop="-6rem"
				classes={{ root: classes.containerRoot }}
			>
				{/* Table */}

				<Grid container component={Box} marginBottom="39px">
					<Grid item xs={12}>
						<Card classes={{ root: classes.cardRoot }}>
							<CardHeader
								className={classes.cardHeader}
								title="Projects"
								titleTypographyProps={{
									component: Box,
									marginBottom: '0!important',
									variant: 'h3',
								}}
							></CardHeader>
							<CardContent>
								{projectAccordians.map((project, index) => {
									return (
										<ControlledAccordions
											key={index}
											projectData={project}
										/>
									);
								})}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Projects;
