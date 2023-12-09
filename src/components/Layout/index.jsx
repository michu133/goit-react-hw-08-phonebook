import { useDispatch } from 'react-redux';
import { useAuth } from '../../hook/useAuth';
import { Link, Outlet } from 'react-router-dom';
import { logout } from '../../redux/auth/operation';
import styles from './index.module.css';

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
      <Link to="contacts">Contacts</Link>

      <button className={styles.logout} onClick={handleClick}>
        Logout
      </button>
    </>
  );
};

export default function Layout() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <Link to="/goit-react-hw-08-phonebook">Home</Link>
          {isLoggedIn ? <AuthNav /> : <UnAuthNav />}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
