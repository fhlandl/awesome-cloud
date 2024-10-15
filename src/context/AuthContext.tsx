import React, { ReactNode, createContext, useState } from 'react';

interface IProps {
  children: ReactNode;
}

interface IAuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContextProps>(
  {} as IAuthContextProps
);

export const AuthContextProvider = (props: IProps) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
