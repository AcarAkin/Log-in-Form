import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import Components
import App from './App';
import Dashboard from './Dashboard';
import Detail from './Detail';
import Error from './Error';

// routes
const routes = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/detail/:id' element={<Detail />} />
    <Route path='*' element={<Error/>} />
  </Routes>
</BrowserRouter>



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( routes );