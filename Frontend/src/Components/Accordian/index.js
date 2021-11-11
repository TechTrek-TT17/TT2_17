import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicTable from '../Table';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import axios from 'axios';

export default function ControlledAccordions(props) {
	const [expanded, setExpanded] = React.useState(false);

	const projectData = props.projectData;

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	/*const projectData = {

		"data": [
		
		{
		
		"budget": "12000",
		
		"description": "Realtime Face Recognition",
		
		"id": "1",
		
		"name": "RTF",
		
		"user_id": "4"
		
		},
		
		{
		
		"budget": "80000",
		
		"description": "Smart Watch Tracker",
		
		"id": "2",
		
		"name": "SWT",
		
		"user_id": "1"
		
		},
		
		{
		
		"budget": "11000",
		
		"description": "Upgrade Legacy System",
		
		"id": "3",
		
		"name": "ULS",
		
		"user_id": "2"
		
		}
		
		],
		
		"status": "success"
		
		}*/
	console.log(props.projectData);
	return (
		<div>
			{projectData && projectData.data
				? projectData.data.map((oneProject, idx) => {
						return (
							<Accordion
								expanded={expanded === `panel${idx + 1}`}
								onChange={handleChange(`panel${idx + 1}`)}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`panel${idx + 1}bh-content`}
									id={`panel${idx + 1}bh-header`}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<Grid
										container
										spacing={5}
										fullWidth
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}
									>
										<Grid item>
											<Typography
												sx={{
													width: '80%',
													flexShrink: 0,
													fontWeight: '700',
												}}
											>
												{oneProject.name}
											</Typography>
											{oneProject.description}
										</Grid>
										<Grid item>
											<Typography
												sx={{
													width: '100%',
													flexShrink: 0,
													fontWeight: '700',
													color: `${
														oneProject.budget >= 0
															? 'green'
															: 'red'
													}`,
												}}
											>
												Remaining Budget:{' '}
												{oneProject.budget}
											</Typography>
										</Grid>
									</Grid>
								</AccordionSummary>
								<AccordionDetails>
									<BasicTable />
									<Button
										variant="contained"
										startIcon={<AddIcon />}
										color="success"
										sx={{
											marginTop: '10px',
											marginLeft: '87%',
										}}
									>
										Add
									</Button>
								</AccordionDetails>
							</Accordion>
						);
				  })
				: null}
		</div>
	);
}
