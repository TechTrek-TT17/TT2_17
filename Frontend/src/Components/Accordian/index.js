import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicTable from '../Table';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export default function ControlledAccordions(props) {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Accordion
			expanded={expanded === 'panel1'}
			onChange={handleChange('panel1')}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
				sx={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<Typography sx={{ width: '80%', flexShrink: 0 }}>
					Project Name
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<BasicTable />
				<Button
					variant="contained"
					startIcon={<AddIcon />}
					color="success"
					sx={{ marginTop: '10px', marginLeft: '87%' }}
				>
					Add
				</Button>
			</AccordionDetails>
		</Accordion>
	);
}
