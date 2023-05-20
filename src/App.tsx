import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import './index.scss';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CardPage from './pages/CardPage/CardPage';

function App() {
  return (
    <Routes>
      <Route path="/:username/:reponame" element={<CardPage />}></Route>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
