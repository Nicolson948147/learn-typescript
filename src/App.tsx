import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from 'components/Layouts';
import { NotFound, PrivateRoute } from 'components/Common';
import LoginPage from 'features/auth/Login/LoginPage';

function App() {
  return (
    <div>
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
