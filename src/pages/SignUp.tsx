import React, { useState } from 'react';
import useAuthContext from '../context/useAuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { signup } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({ loginId, password });
    navigate(from, { replace: true });
  };

  return (
    <section>
      <h1>Welcome to Awesome Cloud</h1>
      <div>
        <form onSubmit={handleSignUpClick}>
          <div>
            {/* <label htmlFor="signup_id">아이디</label> */}
            <input
              type="text"
              id="signup_id"
              placeholder="아이디"
              onChange={(e) => setLoginId(e.target.value)}
            />
          </div>
          <div>
            {/* <label htmlFor="signpu_password">비밀번호</label> */}
            <input
              type="password"
              id="signpu_password"
              autoComplete="off"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            {/* <label htmlFor="signup_password_check">비밀번호 확인</label> */}
            <input
              type="password"
              id="signup_password_check"
              autoComplete="off"
              placeholder="비밀번호 확인"
            />
          </div>
          <div>
            {/* <label htmlFor="signup_name">이름</label> */}
            <input type="text" id="signup_name" placeholder="이름" />
          </div>
          <div>
            {/* <label htmlFor="signup_mail">이메일</label> */}
            <input type="email" id="signup_email" placeholder="이메일" />
          </div>
          <div>
            {/* <label htmlFor="signup_phone_number">전화번호</label> */}
            <input type="tel" id="signup_phone_number" placeholder="전화번호" />
          </div>
          <div>
            <label htmlFor="signup_radio_option1">남자</label>
            <input
              type="radio"
              id="signup_radio_option1"
              name="radio_group1"
              value="M"
            />
            <label htmlFor="signup_radio_option2">여자</label>
            <input
              type="radio"
              id="signup_radio_option2"
              name="radio_group1"
              value="F"
            />
          </div>
          <div>
            <button type="submit">가입하기</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
