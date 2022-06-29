import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(null);

  const onClick = () => {
    navigate('/login');
  };

  useEffect(() => {
    const nickname = localStorage.getItem('nickname');
    setNickname(nickname);
  }, []);

  return (
    <div>
      <p>MainPage</p>
      {nickname ? (
        <p>닉네임: {nickname}</p>
      ) : (
        <button onClick={onClick}>로그인 페이지로 이동</button>
      )}
    </div>
  );
};

export default MainPage;
