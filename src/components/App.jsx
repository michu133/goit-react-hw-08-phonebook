import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Register from './Register';
import { Home } from './Home';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { me } from '../redux/auth/operation';
import { ContactPage } from './ContactPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <ProtectedRoute
              element={<Register />}
              redirect={'/goit-react-hw-08-phonebook/contacts'}
            />
          }
        ></Route>
        <Route
          path="login"
          element={
            <ProtectedRoute
              element={<Login />}
              redirect={'/goit-react-hw-08-phonebook/contacts'}
            />
          }
        ></Route>
        <Route
          path="contacts"
          element={
            <PrivateRoute
              element={<ContactPage />}
              redirect="/goit-react-hw-08-phonebook/login"
            />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
