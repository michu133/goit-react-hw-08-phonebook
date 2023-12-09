import { ContactForm } from './ContactForm';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Register from './Register';
import { Home } from './Home';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <ProtectedRoute
              element={<Register />}
              redirect={'/goit-react-hw-08-phonebook/contactform'}
            />
          }
        ></Route>
        <Route
          path="login"
          element={
            <ProtectedRoute
              element={<Login />}
              redirect={'/goit-react-hw-08-phonebook/contactform'}
            />
          }
        ></Route>
        <Route
          path="contactform"
          element={
            <PrivateRoute
              element={<ContactForm />}
              redirect="/goit-react-hw-08-phonebook/login"
            />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
