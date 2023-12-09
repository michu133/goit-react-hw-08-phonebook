import { Helmet } from 'react-helmet';
import styles from './index.module.css';

export const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p className={styles.welcome}>*This is a user greeting text*</p>
    </div>
  );
};
