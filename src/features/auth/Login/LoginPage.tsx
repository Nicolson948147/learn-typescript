import React from 'react';
import { ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import type {} from '@mui/lab/themeAugmentation';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Container, loginTheme } from './LoginPage.styled';
import { authActions, selectIsLogging } from './authSlice';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLogging = useAppSelector(selectIsLogging);

  const handleLoginClick = () => {
    // TO DO:  get username + password from form login
    dispatch(authActions.login({
      username: 'test',
      password: 'test',
      navigate: (path) => navigate(path),
    }));
  };

  return (
    <ThemeProvider theme={loginTheme}>
      <Container>
        <Paper elevation={3}>
          <Typography variant="h5" component="h1">
            Student Management
          </Typography>
          <Box mt={4}>
            <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
              { isLogging ? <CircularProgress size={20} color="secondary" /> : 'Fake Login' }
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
