import "./App.scss";
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";

const HomePageTRLazy = React.lazy(() => import('./Components/TR/HomePage'));
const HomePageENGLazy = React.lazy(() => import('./Components/ENG/HomePage'));
const HomePageGERLazy = React.lazy(() => import('./Components/GER/HomePage'));

function App() {
  return (
    <Suspense fallback={<h1>Sayfa Yükleniyor...</h1>} >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePageTRLazy />} />
        <Route path='/en' element={<HomePageENGLazy />} />
        <Route path='/de' element={<HomePageGERLazy />} />
      </Routes>
    </Suspense>
  );
}

export default App;
