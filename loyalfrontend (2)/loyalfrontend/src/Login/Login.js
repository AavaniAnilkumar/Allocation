
// useState is used to manage state within a component, allowing you to store and update data
// useEffect is used to perform side effects in a component, such as updating the document title, fetching data, or subscribing to events.


import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BASE_URL from '../config';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';
import ForgotPassword from '../Forgotpassword/forgotpassword';

const defaultTheme = createTheme();

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showResetPage, setShowResetPage] = useState(false);
  const [showForgot, setShowForgot] =useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/jwt/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        setIsLoggedIn(true);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleForgotPasswordClick = () => {
    setShowResetPage(true);
  };

  const handleResetPasswordClick = () => {
    console.log('Password reset initiated successfully');
    setShowResetPage(true);
  }

  if (isLoggedIn) {
    return <Dashboard username={username} />

  }

  return (
   
   <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            { showResetPage? 'Forgot Password': 'SignIn'}
           
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            {showResetPage ? (

              // <ForgotPassword onResetPassword={handleResetPasswordClick} />
              <ForgotPassword onResetPassword={handleResetPasswordClick}/>
            ) : (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" onClick={handleForgotPasswordClick}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    {/* <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link> */}
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

