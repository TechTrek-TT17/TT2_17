import { useState, useLayoutEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ControlledAccordions from '../../Components/Accordian';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuAppBar from '../../Components/Navbar';
import { ProjectData } from './constants';

const CssHeader = styled(Typography)({
	fontWeight: '700',
	padding: "40px", 
});

export const Home = () => {
  return (
    <Box sx={{ bgcolor: '#FCFBFB', height: "100vh" }}>
		<MenuAppBar />
		<Grid container sx={{display: "flex", alignItems: "center", padding: '80px'}}>
			<CssHeader variant="h4">Welcome Back</CssHeader>
      		<ControlledAccordions projectData={ProjectData}/>
		</Grid>
    </Box>
  );
}
