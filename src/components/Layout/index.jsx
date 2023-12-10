import { useAuth } from '../../hook/useAuth';
import { Link, Outlet } from 'react-router-dom';

import styles from './index.module.css';
import { UserMenu } from 'components/UserMenu';

const UnAuthNav = () => (
  <>
    <Link to="register">Register</Link>
    <Link to="login">Login</Link>
  </>
);

const AuthNav = () => {
  return (
    <>
      <Link to="contacts">Contacts</Link>
      <UserMenu />
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
