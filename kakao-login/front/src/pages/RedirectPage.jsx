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

        console.log(data);
        navigate('/');
      } catch (e) {
        console.log(e);
      }
    };

    login();
  }, [navigate]);

  return <div>RedirectPage</div>;
};

export default RedirectPage;
