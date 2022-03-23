import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <p>MainPage</p>
      <button onClick={onClick}>로그인 페이지로 이동</button>
    </div>
  );
};

export default MainPage;
