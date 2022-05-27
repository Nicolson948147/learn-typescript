import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { AdminLayout } from 'components/Layouts';
import { NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/Login/LoginPage';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions, selectIsLoggedIn } from 'features/auth/Login/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const handleClickLogout = () => {
    dispatch(authActions.logout({
      navigate: (path) => navigate(path),
    }));
  };
  return (
    <div>
      {isLoggedIn && (
      <Button variant="contained" color="warning" onClick={handleClickLogout}>
        Logout
      </Button>
      )}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={(
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
