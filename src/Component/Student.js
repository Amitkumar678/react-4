// import React ,{ Link } from 'react-router-dom'

// const Student = () => {
//   return (
//     <div><h2 className="addstudent">Add New Student</h2>
//     <h1>Student Details</h1>
//     <table  className='table'>
//       <thead>
//         <tr>
//           <th scope='col'>NAME</th>
//           <th scope='col'>AGE</th>
//           <th scope='col'>COURSE</th>
//           <th scope='col'>BATCH</th>
//           <th scope='col'>CHANGE</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th scope='row'>John</th>
//           <td className='table1'>24</td>
//           <td className='table1'>MERN</td>
//           <td className='table2'>OCTOBER</td>
//           <td className='table1'><Link to='#'>Edit</Link></td>
//         </tr>
//         <tr>
//           <th scope='row'>Doe</th>
//           <td className='table1'>25</td>
//           <td className='table1'>MERN</td>
//           <td className='table2'>NOVEMBER</td>
//           <td className='table1'><Link to='#'>Edit</Link></td>
//         </tr>
         
//         <tr>
//           <th scope='row'>Biden</th>
//           <td className='table1'>26</td>
//           <td className='table1'>MERN</td>
//           <td className='table2'>DECEMBER</td>
//           <td className='table1'><Link to='#'>Edit</Link></td>
//         </tr>

//         <tr>
//           <th scope='row'>Brar</th>
//           <td className='table1'>22</td>
//           <td className='table1'>MERN</td>
//           <td className='table2'>SEPTEMBER</td>
//           <td className='table1'><Link to='#'>Edit</Link></td>
//         </tr>
//         <tr>
//           <th scope='row'>Christ</th>
//           <td className='table1'>26</td>
//           <td className='table1'>MERN</td>
//           <td className='table2'>OCTOBER</td>
//           <td className='table1'><Link to='#'>Edit</Link></td>
//         </tr>
//         <tr>
//           <th scope='row'>Elent</th>
//           <td className='table1'>23</td>
//           <td className='table1'>MERN</td>
//           <td className='table2'>NOVEMBER</td>
//           <td className='table1'><Link to='#'>Edit</Link></td>
//         </tr>
//       </tbody>
//     </table>
    
      
//     </div>
//   )
// }

// export default Student








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


