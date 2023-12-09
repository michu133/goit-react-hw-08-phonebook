import { useDispatch } from 'react-redux';
import { useAuth } from '../../hook/useAuth';
import { Link, Outlet } from 'react-router-dom';
import { logout } from '../../redux/auth/operation';

const UnAuthNav = () => (
  <>
    <Link to="register">Register</Link>
    <Link to="login">Login</Link>
  </>
);

const AuthNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logout());
  return (
    <>
      <button onClick={handleClick}>Logout</button>
      <Link to="contactform">ContactForm</Link>
    </>
  );
};

export default function Layout() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      Layout
      <nav>
        <Link to="/goit-react-hw-08-phonebook">Home</Link>
        {isLoggedIn ? <AuthNav /> : <UnAuthNav />}
      </nav>
      <Outlet />
    </div>
  );
}
