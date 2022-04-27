import React ,{ Link } from 'react-router-dom'

const Student = () => {
  return (
    <div><h2 className="addstudent">Add New Student</h2>
    <h1>Student Details</h1>
    <table  className='table'>
      <thead>
        <tr>
          <th scope='col'>NAME</th>
          <th scope='col'>AGE</th>
          <th scope='col'>COURSE</th>
          <th scope='col'>BATCH</th>
          <th scope='col'>CHANGE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>John</th>
          <td className='table1'>24</td>
          <td className='table1'>MERN</td>
          <td className='table2'>OCTOBER</td>
          <td className='table1'><Link to='#'>Edit</Link></td>
        </tr>
        <tr>
          <th scope='row'>Doe</th>
          <td className='table1'>25</td>
          <td className='table1'>MERN</td>
          <td className='table2'>NOVEMBER</td>
          <td className='table1'><Link to='#'>Edit</Link></td>
        </tr>
         
        <tr>
          <th scope='row'>Biden</th>
          <td className='table1'>26</td>
          <td className='table1'>MERN</td>
          <td className='table2'>DECEMBER</td>
          <td className='table1'><Link to='#'>Edit</Link></td>
        </tr>

        <tr>
          <th scope='row'>Brar</th>
          <td className='table1'>22</td>
          <td className='table1'>MERN</td>
          <td className='table2'>SEPTEMBER</td>
          <td className='table1'><Link to='#'>Edit</Link></td>
        </tr>
        <tr>
          <th scope='row'>Christ</th>
          <td className='table1'>26</td>
          <td className='table1'>MERN</td>
          <td className='table2'>OCTOBER</td>
          <td className='table1'><Link to='#'>Edit</Link></td>
        </tr>
        <tr>
          <th scope='row'>Elent</th>
          <td className='table1'>23</td>
          <td className='table1'>MERN</td>
          <td className='table2'>NOVEMBER</td>
          <td className='table1'><Link to='#'>Edit</Link></td>
        </tr>
      </tbody>
    </table>
    
      
    </div>
  )
}

export default Student




// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// // function (
// //   name: string,
// //   calories: number,
// //   fat: number,
// //   carbs: number,
// //   protein: number,
// // ) {
// //   return { name, calories, fat, carbs, protein };
// // }

// const rows = [
//  {('Frozen yoghurt', 159, 6.0, 24, 4.0)}
//  ('Ice cream sandwich', 237, 9.0, 37, 4.3),
//  ('Eclair', 262, 16.0, 24, 6.0),
//  ('Cupcake', 305, 3.7, 67, 4.3),
//  ('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
