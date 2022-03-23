import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RedirectPage from './pages/RedirectPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/redirect' element={<RedirectPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
