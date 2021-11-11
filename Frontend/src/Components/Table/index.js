import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

function createData(name, description, amount, createdAt, createdBy, UpdatedAt, updatedBy) {
  return { name, description, amount, createdAt, createdBy, UpdatedAt, updatedBy };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,5,5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

const DeleteIconCustom = styled(DeleteIcon)({
    "&:hover": {
        color: "red", 
        cursor: "pointer",
    }
});

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Created by</TableCell>
            <TableCell align="right">Updated at</TableCell>
            <TableCell align="right">Updated by</TableCell>
            <TableCell align="de">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.createdBy}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
              <TableCell align="right">{row.updatedBy}</TableCell>
              <TableCell align="right"><DeleteIconCustom /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
