import React from 'react';
import './App.css';
import { Landing } from './components/components/Landing';
import { HomePage } from './components/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {SellerPage} from './components/pages/SellerPage';


function App() {
  return (
    <>
    <BrowserRouter>
    {/*</BrowserRouter><Navigate></Navigate>*/}
      <Routes>
        <Route path="*" element={<HomePage></HomePage>}/>
        
        <Route path="/seller" element={<SellerPage></SellerPage>}/>
       
  
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
