import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  loggedIn: boolean;
  userID: string | null;
}

const initialState: AuthState = {
  loggedIn: false,
  userID: null,
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => ({
      ...state,
      loggedIn: true,
      userID: action.payload,
    }),
    logout: (state) => ({
      ...state,
      loggedIn: false,
      userID: null
    }),
  }
})

export const { login, logout } = auth.actions;
export default auth.reducer;