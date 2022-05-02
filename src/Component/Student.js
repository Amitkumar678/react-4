import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

function createData(
 name,Age,Course,Batch,change
) {
  return { name, Age, Course, Batch, change };
}

const rows = [
  createData('John', 26, 'MERN', 'October', <NavLink to='#'>Edit</NavLink>),
  createData(' Doe', 22, 'MERN', 'November', <NavLink to='#'>Edit</NavLink>),
  createData('Biden', 21, 'MERN', 'November', <NavLink to='#'>Edit</NavLink>),
  createData('Barar', 24, 'MERN', 'December', <NavLink to='#'>Edit</NavLink>),
  createData('christ', 22, 'MERN', 'January', <NavLink to='#'>Edit</NavLink>),
  createData('Elent', 23, 'MERN', 'February', <NavLink to='#'>Edit</NavLink>),
];

export default function BasicTable() {
  return (
    <div className='containertable'>
    <h2>Student List</h2>
    <button className='btn99'>Add New Student</button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
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
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


