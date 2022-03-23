import React from 'react';
import kakaoIcon from '../kakao-login.png';

const LoginPage = () => {
  const { REACT_APP_KAKAO_API_KEY, REACT_APP_KAKAO_REDIRECT_URL } = process.env;

  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_API_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`;

  return (
    <a href={url} style={{ display: 'inline-block' }}>
      <img src={kakaoIcon} alt='login-btn' />
    </a>
  );
};

export default LoginPage;
