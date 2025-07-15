import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const users = {
  'user@test.com': { role: 'user', password: '123' },
  'admin@test.com': { role: 'admin', password: '123' }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const found = users[email];
    if (found && found.password === password) {
      setUser({ email, role: found.role });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
    