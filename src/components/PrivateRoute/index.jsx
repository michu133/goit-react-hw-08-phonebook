import { useAuth } from 'hook/useAuth';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ element: Component, redirect }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? Component : <Navigate to={redirect} />;
}
