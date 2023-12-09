import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operation';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(logout.fulfilled, (state, action) => initialState);
  },
});

export const authReducer = authSlice.reducer;
