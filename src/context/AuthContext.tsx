import React, { ReactNode, createContext, useState } from 'react';
import UserRepository, { ISignUpRequest } from '../repository/UserRepository';

interface IProps {
  children: ReactNode;
}

interface IAuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  signup: (dto: ISignUpRequest) => Promise<void>;
}

export const AuthContext = createContext<IAuthContextProps>(
  {} as IAuthContextProps
);

export const AuthContextProvider = (props: IProps) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userRepository = new UserRepository();

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const signup = async (dto: ISignUpRequest) => {
    try {
      await userRepository.signup(dto);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
