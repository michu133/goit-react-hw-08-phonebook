import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operation';
import styles from './index.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => dispatch(logout());

  return (
    <div className={styles.container}>
      <p>Email: {typeof user === 'object' ? user.name : user}</p>
      <button className={styles.btn} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
