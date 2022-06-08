import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function PublicRoute(props: any) {
  const { children } = props;
  const isLoggedIn = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/admin/dashboard" />;
  }
  return children;
}
