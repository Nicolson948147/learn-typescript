import {
  Button, Grid, ThemeProvider, Typography,
} from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/Login/authSlice';
import Dashboard from 'features/dashboard';
import Student from 'features/student';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import * as Styled from './Admin.styled';
import Sidebar from './Sidebar';

export interface AdminLayoutProps {}

export function AdminLayout(props: AdminLayoutProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    dispatch(authActions.logout({
      navigate: (path) => navigate(path),
    }));
  };

  return (
    <ThemeProvider theme={Styled.loginTheme}>
      <Styled.Container>
        <Grid container>
          <Grid item xs={12}>
            <Styled.Header>
              <Typography variant="h5" component="h2">Student Management</Typography>
              <Button variant="outlined" color="primary" onClick={handleClickLogout}>Logout</Button>
            </Styled.Header>
          </Grid>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Student />} />
            </Routes>
          </Grid>
        </Grid>
      </Styled.Container>
    </ThemeProvider>
  );
}
