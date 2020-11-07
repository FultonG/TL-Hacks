import {createContext, useContext, useReducer} from 'react'
import AppReducer from './AppReducer';

let initialState = {};
let user = localStorage.getItem('user');

if (user !== null) {
  initialState.user = JSON.parse(user);
}

export function useAppState() {
  return useContext(AppContext)[0];
}

export function useAppReducer() {
  return useContext(AppContext)[1];
}
export const AppContext = createContext();

export function AppStateProvider({ children }) {
  const value = useReducer(AppReducer, initialState);
  return (
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}