import { createContext, useContext, useState } from 'react';
import { getUserByEmail } from '../data/mockData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('asistencia-user');
    return saved ? JSON.parse(saved) : null;
  });

  function login(email, password) {
    const found = getUserByEmail(email);
    if (!found || found.password !== password) return null;
    setUser(found);
    localStorage.setItem('asistencia-user', JSON.stringify(found));
    return found;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('asistencia-user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
