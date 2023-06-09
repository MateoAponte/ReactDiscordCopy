import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '0000',
    image: '',
    status: 'default',
    nickname: '',
  });
  const [theme, setTheme] = useState('dark');

  return <UserContext.Provider value={{ user, setUser, theme, setTheme }}>{children}</UserContext.Provider>;
};
