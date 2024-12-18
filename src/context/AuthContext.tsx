import React, { ReactNode, createContext, useEffect, useState } from 'react';
import UserRepository, {
  ILoginRequest,
  ISignUpRequest,
} from '../repository/UserRepository';
import AuthRepository from '../repository/AuthRepository';

interface IProps {
  children: ReactNode;
}

interface IAuthContextProps {
  isAuthenticated: boolean;
  login: (dto: ILoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  signup: (dto: ISignUpRequest) => Promise<void>;
}

export const AuthContext = createContext<IAuthContextProps>(
  {} as IAuthContextProps
);

export const AuthContextProvider = (props: IProps) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authRepository = new AuthRepository();
  const userRepository = new UserRepository();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await authRepository.checkAuth();
        setIsAuthenticated(true);
      } catch (e) {
        console.log('Not authorized');
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (dto: ILoginRequest) => {
    try {
      await userRepository.login(dto);
      setIsAuthenticated(true);
    } catch (e) {
      console.error('Login Failed');
      throw e;
    }
  };

  const logout = async () => {
    try {
      await userRepository.logout();
      setIsAuthenticated(false);
    } catch (e) {
      console.error('Logout Failed');
      throw e;
    }
  };

  const signup = async (dto: ISignUpRequest) => {
    try {
      await userRepository.signup(dto);
    } catch (e) {
      console.error('Sign Up Failed');
      throw e;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
