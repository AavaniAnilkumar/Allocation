// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Avatar,
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   Grid,
//   Link,
//   TextField,
//   Typography,
//   ThemeProvider,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import ResetPasswordPage from "../Resetpassword/resetpassword";

// // import { defaultTheme } from "./yourTheme"; // Import your theme from the correct location

// const BASE_URL = "http://localhost:8000"; // Update with your API base URL

// const ForgotPassword = ({ onResetPassword }) => {
//   const [email, setEmail] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);



//   const handleForgotPassword = async () => {
//     try {
//       const response = await axios.post(`${BASE_URL}/forgot/`, {
//         email: email,
//       });
//       // Handle successful response, for example, show a success message
//         setSuccessMessage(response.data.message);
//         setErrorMessage('');
//         setEmail('');
//         setResetPasswordSuccess(true);
        
//         onResetPassword(); // Notify the parent component that password reset initiated
//     } catch (error) {
//         setSuccessMessage('');
//         setErrorMessage(error.response.data.error);
//     }
//   };
  

  
//     const handleResetSuccess =() => {
//     console.log('password reset is successfull');
//     setResetPasswordSuccess(false);
//   }
//   return (
//     <Box>
//       <Typography variant="h5">Forgot Password</Typography>
//       {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
//       {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="email"
//         label="Email"
//         name="email"
//         autoComplete="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         autoFocus
//       />
//       <Button
//         fullWidth
//         variant="contained"
//         color="primary"
//         onClick={handleForgotPassword}
//       >
//         Reset Password
//       </Button>
//     </Box>
    
//   );
// };
// export default ForgotPassword;



import React, { useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
  ThemeProvider,
} from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ResetPassword from "../ResetPassword/resetpassword";
// import { defaultTheme } from "./yourTheme"; // Import your theme from the correct location
import BASE_URL from "../config";

const ForgotPassword = ({ onResetPassword }) => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);


const handleForgotPassword = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/forgot/`, {
        email: email,
      });

      // Handle successful response
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setShowResetPassword(true); // Show the ResetPassword component
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(error.response?.data?.error || "Password reset failed");
      setShowResetPassword(false); // Hide the ResetPassword component
    }
  };

  return (
    <Box>
      {!showResetPassword ? (
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleForgotPassword}
          >
           Sent OTP
          </Button>
        </>
      ) : (
        <ResetPassword showForgotPasswordTitle={true}/>
      )}
    </Box>
   
  );
};
export default ForgotPassword;
