import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operation';
import styles from './index.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.form);
    dispatch(
      login({
        email,
        password,
      })
    );
    console.log('Register component rendered');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={nanoid()}>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor={nanoid()}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button className={styles.submit} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
