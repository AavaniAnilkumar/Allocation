// import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import Typography from '@mui/material/Typography';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

// import '@mui/material/styles';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './UserRole.css';
// import BASE_URL from '../config';


// const UserRoleComponent = () => {
//   const [userRoles, setUserRoles] = useState([]);
//   const [newRoleName, setNewRoleName] = useState('');
//   const [selectedRole, setSelectedRole] = useState('');
//   const [usersInRole, setUsersInRole] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [availableUsers, setAvailableUsers] = useState([]);
//   const [showAddUserForm, setShowAddUserForm] = useState(false);
//   const [selectedUserRole, setSelectedUserRole] = useState(null);

//   useEffect(() => {
//     fetchUserRoles();
//   }, []);

//   const fetchUserRoles = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/api/user-roles/all/`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       setUserRoles(response.data);
//     } catch (error) {
//       console.error('Error fetching user roles:', error);
//     }
//   };

//   const handleRoleSelection = async (roleId) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/api/user-roles/${roleId}/`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       setUsersInRole(response.data);
//       setSelectedRole(roleId);
//       // Set the selected user role
//       const selectedRole = userRoles.find(role => role.id === roleId);
//       setSelectedUserRole(selectedRole);
//     } catch (error) {
//       console.error('Error fetching users in role:', error);
//     }
//   };

//   const handleAddUserRole = async () => {
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/user-roles/create/`,
//         { name: newRoleName },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       );
//       setUserRoles([...userRoles, response.data]);
//       setNewRoleName('');
//       // Fetch user roles again to update the list
//       fetchUserRoles();
//     } catch (error) {
//       console.error('Error creating user role:', error);
//     }
//   };

//   const handleAddUserToRole = async () => {
//     try {
//       const availableUsersResponse = await axios.get(`${BASE_URL}/api/users/all/`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       setAvailableUsers(availableUsersResponse.data);
//       //  Show the add user form after fetching available users
//        setShowAddUserForm(true);
//       await axios.put(
//         `${BASE_URL}/api/user-to-userrole/${selectedUser}/${selectedRole}/`,
//         null,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       );
//       // Refresh users in the selected role
//       handleRoleSelection(selectedRole);
//     } catch (error) {
//       console.error('Error adding user to role:', error);
//     }
//   };

//   const handleRemoveUserFromRole = async (userId) => {
//     try {
//       await axios.delete(
//         `${BASE_URL}/api/user-to-userrole/${userId}/${selectedRole}/`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       );
//       // Refresh users in the selected role
//       handleRoleSelection(selectedRole);
//     } catch (error) {
//       console.error('Error removing user from role:', error);
//     }
//   };

//   return (
// //     <div className='container'>
// //       {/* Form to add new user role */}
// //       <input 
// //         type="text"
// //         placeholder="New Role Name"
// //         value={newRoleName}
// //         onChange={(e) => setNewRoleName(e.target.value)}
// //       />
// //       <button onClick={handleAddUserRole}>Add User Role</button>

// //       {/* List of user roles */}
// //       <div className="user-role-list">
// //   <h5>User Role List</h5>
// //   <table className="role-table">
// //     <thead>
// //       <tr>
// //         <th>Role Name</th>
// //       </tr>
// //     </thead>
// //     <tbody>
// //       {userRoles.map(role => (
// //         <tr key={role.id} onClick={() => handleRoleSelection(role.id)}>
// //           <td>{role.name}</td>
// //         </tr>
// //       ))}
// //     </tbody>
// //   </table>
// // </div>
// //       {/* <div>
// //           <h5>User Role List</h5>
// //         </div>
// //       <ul>
// //         {userRoles.map((role) => (
// //           <li key={role.id} onClick={() => handleRoleSelection(role.id)}>
            
// //             {role.name}
// //           </li>
// //         ))}
// //       </ul> */}

// //       {/* Display selected user role name */}
// //       {selectedUserRole && (
// //         <div>
// //           <h5>Users in {selectedUserRole.name}</h5>
// //         </div>
// //       )}

// //       {/* List of users in selected role */}
// //       {selectedRole && (
// //         <ul>
// //           {usersInRole.map((user) => (
// //             <li key={user.id}>
// //               {user.username}
// //               <button onClick={() => handleRemoveUserFromRole(user.id)}>
// //                 Remove User
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// //       {/* Form to add user to selected role */}

// //       {selectedRole && (
// //         <div>
// //           <button onClick={handleAddUserToRole}>Add User to Role</button>
          
// //           {/* Display the form only when showAddUserForm is true */}
// //           {showAddUserForm && (
// //             <div>
// //               {/* New dropdown for available users */}
// //               <select
// //                 value={selectedUser}
// //                 onChange={(e) => setSelectedUser(e.target.value)}
// //               >
// //                 <option value="">Select User</option>
// //                 {availableUsers.map((user) => (
// //                   <option key={user.id} value={user.id}>
// //                     {user.username}
// //                   </option>
// //                 ))}
// //               </select>
// //               {/* <button onClick={handleAddUserToRole}>Add User to Role</button> */}
// //             </div>
// //           )}
// //         </div>
// //       )}
      
      
// //     </div>


// <div className="container">
//   <h2> User Roles</h2>
//       {/* Form to add new user role */}
//       <Input
//         type="text"
//         placeholder="New Role Name"
//         value={newRoleName}
//         onChange={(e) => setNewRoleName(e.target.value)}
//       />
//       <Button onClick={handleAddUserRole}>Add User Role</Button>

//       {/* List of user roles */}
//       <div className="user-role-list">
//         <Typography variant="h5">User Role List</Typography>
//         <TableContainer>
//           <Table className="role-table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Available Role Names</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userRoles.map((role) => (
//                 <TableRow key={role.id} onClick={() => handleRoleSelection(role.id)}>
//                   <TableCell>{role.name}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>

//       {/* Display selected user role name */}
//       {selectedUserRole && (
//         <div>
//           <Typography variant="h5">Users in {selectedUserRole.name}</Typography>
//         </div>
//       )}

//       {/* List of users in selected role */}
//       {selectedRole && (
//         <ul>
//           {usersInRole.map((user) => (
//             <li key={user.id}>
//               {user.username}
//               <Button onClick={() => handleRemoveUserFromRole(user.id)}>
//                 Remove User
//               </Button>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Form to add user to selected role */}
//       {selectedRole && (
//         <div>
//           <Button onClick={handleAddUserToRole}>Add User to Role</Button>

//           {/* Display the form only when showAddUserForm is true */}
//           {showAddUserForm && (
//             <div>
//               {/* New dropdown for available users */}
//               <Select
//                 value={selectedUser}
//                 onChange={(e) => setSelectedUser(e.target.value)}
//               >
//                 <MenuItem value="">Select User</MenuItem>
//                 {availableUsers.map((user) => (
//                   <MenuItem key={user.id} value={user.id}>
//                     {user.username}
//                   </MenuItem>
//                 ))}
//               </Select>
//               {/* <Button onClick={handleAddUserToRole}>Add User to Role</Button> */}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserRoleComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Button,
//   Table,
//   Modal,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Paper,
//   Container,
//   Typography,
//   Grid
// } from '@material-ui/core';
// import './UserRole.css';
// import BASE_URL from '../config';

// const UserRoleComponent = () => {
//   const [userRoles, setUserRoles] = useState([]);
//   const [newRoleName, setNewRoleName] = useState('');
//   const [selectedRole, setSelectedRole] = useState('');
//   const [usersInRole, setUsersInRole] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [availableUsers, setAvailableUsers] = useState([]);
//   const [showAddUserForm, setShowAddUserForm] = useState(false);
//   const [selectedUserRole, setSelectedUserRole] = useState(null);

//   useEffect(() => {
//     fetchUserRoles();
//     fetchAvailableUsers();
//   }, []);

//   useEffect(() => {
//     if (selectedRole) {
//       fetchAvailableUsers();
//     }
//   }, [selectedRole]);

//   const fetchUserRoles = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/user-roles/all/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       setUserRoles(response.data);
//     } catch (error) {
//       console.error('Error fetching user roles:', error);
//     }
//   };

//   const fetchAvailableUsers = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/users/all/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       setAvailableUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching available users:', error);
//     }
//   };

//   const handleRoleSelection = async (roleId) => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/api/user-roles/${roleId}/`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       setUsersInRole(response.data);
//       setSelectedRole(roleId);
//       const selectedRole = userRoles.find((role) => role.id === roleId);
//       setSelectedUserRole(selectedRole);
//     } catch (error) {
//       console.error('Error fetching users in role:', error);
//     }
//   };

//   const handleAddUserRole = async () => {
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/user-roles/create/`,
//         { name: newRoleName },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       );
//       setUserRoles([...userRoles, response.data]);
//       setNewRoleName('');
//       fetchUserRoles();
//     } catch (error) {
//       console.error('Error creating user role:', error);
//     }
//   };

//   const handleAddUserToRole = async () => {
//     try {
//       fetchAvailableUsers();
//       setShowAddUserForm(true);

//       await axios.put(
//         `${BASE_URL}/api/user-to-userrole/${selectedUser}/${selectedRole}/`,
//         null,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       );
//       console.log('User added to role successfully')
//       handleRoleSelection(selectedRole);
//     } catch (error) {
//       console.error('Error adding user to role:', error);
//     }
//   };

//   const handleRemoveUserFromRole = async (userId) => {
//     try {
//       await axios.delete(
//         `http://127.0.0.1:8000/api/user-to-userrole/${userId}/${selectedRole}/`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         }
//       );
//       handleRoleSelection(selectedRole);
//     } catch (error) {
//       console.error('Error removing user from role:', error);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Form to add new user role */}
//       <TextField
//         type="text"
//         placeholder="New Role Name"
//         value={newRoleName}
//         onChange={(e) => setNewRoleName(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onClick={handleAddUserRole}>
//         Add User Role
//       </Button>

//       {/* List of user roles */}
//       <div className="user-role-list">
//         <h5>User Role List</h5>
//         <Table>
//           <thead>
//             <tr>
//               <th>Role Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userRoles.map((role) => (
//               <tr key={role.id} onClick={() => handleRoleSelection(role.id)}>
//                 <td>{role.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* Display selected user role name */}
//       {selectedUserRole && (
//         <div>
//           <h5>Users in {selectedUserRole.name}</h5>
//         </div>
//       )}

//       {/* List of users in selected role */}
//       {selectedRole && (
//         <ul>
//           {usersInRole.map((user) => (
//             <li key={user.id}>
//               {user.username}
//               <Button variant="contained" color="secondary" onClick={() => handleRemoveUserFromRole(user.id)}>
//                 Remove User
//               </Button>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Form to add user to selected role */}
//       {selectedRole && (
//         <div>
//           {/* Button to open modal */}
//           <Button variant="contained" color="primary" onClick={() => setShowAddUserForm(true)}>
//             Add User to Role
//           </Button>

//           {/* Modal for user selection */}
//           <Modal open={showAddUserForm} onClose={() => setShowAddUserForm(false)} style={{ marginTop: '50px' }}>
//     <Paper className="add-admin-modal">
//       <Container maxWidth="sm">
//         <Typography variant="h5">Add Admin User</Typography>
//         <form onSubmit={handleAddUserToRole}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               {/* Dropdown for available users */}
//               <FormControl fullWidth>
//                 <InputLabel>Select User</InputLabel>
//                 <Select
//                   value={selectedUser}
//                   onChange={(e) => setSelectedUser(e.target.value)}
//                 >
//                   <MenuItem value="">Select User</MenuItem>
//                   {availableUsers.map((user) => (
//                     <MenuItem key={user.id} value={user.id}>
//                       {user.username}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//           <Button variant="contained" color="primary" type="submit" onClick={handleAddUserRole}>
//             Add User
//           </Button>
//           <Button variant="contained" color="secondary" onClick={() => setShowAddUserForm(false)}>
//             Close
//           </Button>
//         </form>
//       </Container>
//     </Paper>
//   </Modal>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserRoleComponent;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button,Form,Modal } from 'react-bootstrap';
import './UserRole.css';
import BASE_URL from '../config';

const UserRoleComponent = () => {
  const [userRoles, setUserRoles] = useState([]);
  const [newRoleName, setNewRoleName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [usersInRole, setUsersInRole] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [availableUsers, setAvailableUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [selectedUserRole, setSelectedUserRole] = useState(null);
  const [isUserRoleClicked, setIsUserRoleClicked] = useState(false);

  useEffect(() => {
    fetchUserRoles();
    fetchAvailableUsers();
  }, []);

  useEffect(() => {
    // Fetch available users when the selected role changes
    if (selectedRole) {
      fetchAvailableUsers();
    }
  }, [selectedRole]);


  const fetchUserRoles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user-roles/all/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setUserRoles(response.data);
    } catch (error) {
      console.error('Error fetching user roles:', error);
    }
  };

  const fetchAvailableUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/users/all/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setAvailableUsers(response.data);
    } catch (error) {
      console.error('Error fetching available users:', error);
    }
  };

  const handleRoleSelection = async (roleId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user-roles/${roleId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      setUsersInRole(response.data);
      setSelectedRole(roleId);
      // Set the selected user role
      const selectedRole = userRoles.find(role => role.id === roleId);
      setSelectedUserRole(selectedRole);
      
    } catch (error) {
      console.error('Error fetching users in role:', error);
    }
  };

  const handleAddUserRole = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/user-roles/create/`,
        { name: newRoleName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      setUserRoles([...userRoles, response.data]);
      setNewRoleName('');
      // Fetch user roles again to update the list
      fetchUserRoles();
    } catch (error) {
      console.error('Error creating user role:', error);
    }
  };

  const handleAddUserToRole = async () => {
    try {
      // const availableUsersResponse = await axios.get('http://127.0.0.1:8000/api/users/all/', {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      //   },
      // });
      // setAvailableUsers(availableUsersResponse.data);
      fetchAvailableUsers();
      // After setting available users, show the add user form
      setShowAddUserForm(true);
  
      // Other logic remains the same
      await axios.put(
        `${BASE_URL}/api/user-to-userrole/${selectedUser}/${selectedRole}/`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      handleRoleSelection(selectedRole);
      
    } catch (error) {
      console.error('Error adding user to role:', error);
    }
  };
  
  


  const handleRemoveUserFromRole = async (userId) => {
    try {
      await axios.delete(
        `${BASE_URL}/api/user-to-userrole/${userId}/${selectedRole}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      // Refresh users in the selected role
      handleRoleSelection(selectedRole);
    } catch (error) {
      console.error('Error removing user from role:', error);
    }
  };

  return (
    <div className='container'>
      {/* Form to add new user role */}
      <input 
        type="text"
        placeholder="New Role Name"
        value={newRoleName}
        onChange={(e) => setNewRoleName(e.target.value)}
      />
      <button onClick={handleAddUserRole}>Add User Role</button>

      {/* List of user roles */}
      <div className="user-role-list">
  <h5>User Role List</h5>
  <table className="role-table">
    <thead>
      <tr>
        <th>Role Name</th>
      </tr>
    </thead>
    <tbody>
      {userRoles.map(role => (
        <tr key={role.id} onClick={() => handleRoleSelection(role.id)}>
          <td>{role.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      

      {/* Display selected user role name */}
      {selectedUserRole && (
        <div>
          <h5>Users in {selectedUserRole.name}</h5>
        </div>
      )}

      {/* List of users in selected role */}
      {selectedRole && (
        <ul>
          {usersInRole.map((user) => (
            <li key={user.id}>
              {user.username}
              <button onClick={() => handleRemoveUserFromRole(user.id)}>
                Remove User
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Form to add user to selected role */}

      {selectedRole && (
        
  <div>
    {/* Button to open modal */}
    <Button variant="primary" onClick={() => setShowAddUserForm(true)}>
      Add User to Role
    </Button>
   
    {/* Modal for user selection */}
    <Modal show={showAddUserForm} onHide={() => setShowAddUserForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Select User to Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
        {/* Dropdown for available users */}
        <Form.Control
          as="select"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select User</option>
          {availableUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowAddUserForm(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddUserToRole}>
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
)}
      
    </div>
  );
};

export default UserRoleComponent;

