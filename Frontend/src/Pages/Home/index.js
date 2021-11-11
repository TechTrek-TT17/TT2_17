import { useState, useLayoutEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ControlledAccordions from '../../components/Accordian';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';



const CssHeader = styled(Typography)({
	fontWeight: '700',
	padding: "40px", 
});

export const Home = () => {

  return (
    <Box sx={{ bgcolor: '#FCFBFB', padding: '80px' }}>
		<Grid container sx={{display: "flex", alignItems: "center"}}>
			<Grid item xs={10}>
				<CssHeader variant="h4">Budget Management System</CssHeader>

			</Grid>
			<Grid item xs={2}>
				
			</Grid>
			
		</Grid>
      	<ControlledAccordions />
    </Box>
  );
}
