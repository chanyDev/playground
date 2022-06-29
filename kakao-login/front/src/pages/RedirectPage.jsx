import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = async () => {
      const code = new URLSearchParams(window.location.search).get('code');

      try {
        const { data } = await axios.get(
          `http://localhost:4000/auth/kakao?code=${code}`
        );

        localStorage.setItem('nickname', data.nickname);
        navigate('/');
      } catch (e) {
        throw Error(e);
      }
    };

    login();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default RedirectPage;
