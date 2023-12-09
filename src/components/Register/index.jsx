import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import { useState } from 'react';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.form);
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    console.log('Register component rendered');
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        <label htmlFor={nanoid()}>
          Username
          <input
            type="text"
            name="username"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
