import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import { SampleGame } from './SampleGame';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='sample' element={<SampleGame />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);