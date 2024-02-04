// import * as React from 'react';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { IconButton } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import AddTaskIcon from '@mui/icons-material/AddTask';


// export const mainListItems = ({ handlePageChange, username, handleLogout }) => (
//   <React.Fragment>
//     <br />
//     <br />
//     <br />
//     <br />
   
//     <ListItemButton onClick={() => handlePageChange('Home')}>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Home" />
//     </ListItemButton>
    

//     <ListItemButton onClick={() => handlePageChange('User')}>
//       <ListItemIcon>
//         <PersonIcon />
//       </ListItemIcon>
//       <ListItemText primary="User" />
//     </ListItemButton>

//     <ListItemButton onClick={() => handlePageChange('UserRole')}>
//       <ListItemIcon>
//         <GroupAddIcon />
//       </ListItemIcon>
//       <ListItemText primary="User Role" />
//     </ListItemButton>

//     <ListItemButton onClick={() => handlePageChange('Permissions')} >
//       <ListItemIcon>
//         <AddTaskIcon />
//       </ListItemIcon>
//       <ListItemText primary="Permission" />
//     </ListItemButton>



//     <ListItemButton onClick={() => handlePageChange('Employee')}>
//       <ListItemIcon>
//         {/* <ShoppingCartIcon /> */}
//         <PeopleIcon/>
//       </ListItemIcon>
//       <ListItemText primary="Employee" />
//     </ListItemButton>
    
    
    
  
//     <ListItemButton onClick={() => handlePageChange('AllocationTable')}>
//       <ListItemIcon>
//         {/* <BarChartIcon /> */}
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Allocation" />
//     </ListItemButton>
   
   

//    <br /> <br />
 

//     <ListItemButton>
//       <ListItemIcon>
//         <AccountCircleIcon />
//       </ListItemIcon>
//       <ListItemText  primary={username} />
//       <IconButton color="inherit" onClick={handleLogout}>
//         <ExitToAppIcon /> {/* Logout button */}
//       </IconButton>
//     </ListItemButton>

    

//   </React.Fragment>


// );


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { AccountCircle as AccountCircleIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material'; // Assuming you are using MUI icons

// function CustomNavbar({onPageChange,onLogout,username}) {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//           <Nav.Link onClick={() => onPageChange('Home')}>Home</Nav.Link>
//             <Nav.Link onClick={() => onPageChange('User')}>User</Nav.Link>
//             <Nav.Link onClick={() => onPageChange('UserRole')}>UserRole</Nav.Link>
//             <Nav.Link onClick={() => onPageChange('Permissions')}>Permissions</Nav.Link>
//             <Nav.Link onClick={() => onPageChange('Employee')}>Employee</Nav.Link>
//             <Nav.Link onClick={() => onPageChange('AllocationTable')}>Allocation</Nav.Link>
        
//           </Nav>
//           <Nav className="me-auto">
          
//             <NavDropdown title={<div><AccountCircleIcon /> {username}</div>}>
//               <NavDropdown.Item onClick={() => onPageChange('Home')}>
//                <Nav.Link onClick={onLogout}> <ExitToAppIcon /> Logout</Nav.Link>
//               </NavDropdown.Item>
         
//             </NavDropdown>
//           </Nav>
       
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AccountCircle as AccountCircleIcon, ExitToApp as ExitToAppIcon  } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
function CustomNavbar({ onPageChange, onLogout, username }) {
  return (
    <Navbar expand="lg" bg="custom-background-color" style={{ marginBottom: '20px', color: 'custom-text-color' }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
          <Nav.Link
            onClick={() => onPageChange('Home')}
            style={{ marginRight: '40px', display: 'flex', alignItems: 'center',  color: 'white' }}
          >
            <HomeIcon style={{ marginRight: '8px' }} /> Home
          </Nav.Link>


          
            <Nav.Link 
                onClick={() => onPageChange('User')} 
                style={{ marginRight: '40px', display: 'flex', alignItems: 'center ',  color: 'white'}}>
                  <PersonIcon style={{marginRight: '8px'}} />User</Nav.Link>



            <Nav.Link onClick={() => onPageChange('UserRole')} style={{ marginRight: '40px', display: 'flex', alignItems: 'center ',  color: 'white' }}>
              <GroupAddIcon style={{marginRight: '8px'}} />UserRole</Nav.Link>
            <Nav.Link onClick={() => onPageChange('Permissions')} style={{ marginRight: '40px', display: 'flex', alignItems: 'center ',  color: 'white' }}><AddTaskIcon style={{marginRight: '8px'}} />Permissions</Nav.Link>
            <Nav.Link onClick={() => onPageChange('Employee')} style={{ marginRight: '40px', display: 'flex', alignItems: 'center ',  color: 'white' }}><GroupsIcon style={{marginRight: '8px'}}/>Employee</Nav.Link>
            <Nav.Link onClick={() => onPageChange('TimeCycle')} style={{ marginRight: '40px', display: 'flex', alignItems: 'center ' ,  color: 'white'}}><AssignmentIcon style={{marginRight: '8px'}} />Time Cycle</Nav.Link>
            <Nav.Link onClick={() => onPageChange('AllocationTable')} style={{ marginRight: '40px', display: 'flex', alignItems: 'center ' ,  color: 'white'}}><AssignmentIcon style={{marginRight: '8px'}} />Allocation</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title={<div style={{color: 'white'}}><AccountCircleIcon style={{ marginRight: '7px' }} /> {username}</div>}>
              <NavDropdown.Item onClick={() => onPageChange('Home')}>
                <Nav.Link onClick={onLogout} ><ExitToAppIcon style={{ marginRight: '5px' }} /> Logout</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

