import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Exemplo: tipos possíveis 'aluno', 'professor', 'diretor'
  const [user, setUser] = useState(null);
  const [navUser, setNavUser] = useState('aluno')

  const login = (type) => setUser({ tipo: type }); // Simula login
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, navUser, setNavUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);