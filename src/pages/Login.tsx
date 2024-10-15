import React from 'react';
import useAuthContext from '../context/useAuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLoginClick = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <section>
      <h1>Login</h1>
      <button onClick={handleLoginClick}>login</button>
    </section>
  );
};

export default Login;
