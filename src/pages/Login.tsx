import React, { useState } from 'react';
import useAuthContext from '../context/useAuthContext';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ loginId, password });
    navigate(from, { replace: true });
  };

  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <section>
      <h1>Welcome to Awesome Cloud</h1>
      <div>
        <form onSubmit={handleLoginClick}>
          <div>
            <input
              type="text"
              id="loginId"
              placeholder="아이디"
              onChange={(e) => setLoginId(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="loginPassword"
              autoComplete="off"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
          <div>
            <Link to={'/signup'} state={{ from: location }}>
              <button>회원가입</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
