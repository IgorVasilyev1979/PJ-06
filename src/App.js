import React from 'react';
import "react-multi-carousel/lib/styles.css";
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Main } from './screens/main-page/index'
import { Authorization } from './screens/authorization-page/index'
import { Search } from './screens/search-page/index'
import { SearchOutput } from './screens/search-output-page/index'
import { NotFound } from './screens/not-found/index'
import { Layout } from './components/layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Main /> } />
          <Route path="auth" element={ <Authorization /> } />
          <Route path="search" element={ <Search /> } />
          <Route path="search-out" element={ <SearchOutput /> } />
          <Route path="*" element={ <NotFound /> } />  
        </Route>
      </Routes>
    </>
  );
}

export default App;
