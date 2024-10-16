import React from 'react';
import useAuthContext from '../context/useAuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate(from, { replace: true });
  };

  return (
    <section>
      <h1>Welcome to Awesome Cloud</h1>
      <div>
        <form onSubmit={handleLoginClick}>
          <div>
            <label htmlFor="loginId">아이디</label>
            <input type="text" id="loginId" />
          </div>
          <div>
            <label htmlFor="loginPassword">비밀번호</label>
            <input type="password" id="loginPassword" autoComplete="off" />
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
