import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'components/Layouts';
import { HomePage, NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/Login/LoginPage';
import { PublicRoute } from 'components/Common/PublicRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          )}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/*"
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
