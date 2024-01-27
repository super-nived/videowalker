import React from 'react';
import './App.css';

import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Mains from './pages/Mains';
import Cnt from './pages/Cnt';
import AboutPage from './pages/About';
import Game from './pages/About';
import Admin from './pages/Admin';
import AdvertiserPage from './pages/Advertiser';
import TresureDetails from './pages/TresureDetails';



function App() {
  return (

    <div className="App">
       <BrowserRouter>    
       {/* <ScrollToTop> */}
        <Routes>
          <Route exact='/' path='/' element={<Mains/>} />
          <Route path='/advertisers' element={<AdvertiserPage/>}></Route> 
          <Route path='/tresuredetails' element={<TresureDetails/>}></Route> 
          <Route path='/about' element={<AboutPage/>}></Route> 
          <Route path='/contact' element={<Cnt/>}></Route> 
          <Route path='/game' element={<Game/>}></Route> 
          <Route path='/admin' element={<Admin></Admin>}></Route> 
        </Routes>
        {/* </ScrollToTop>   */}
      </BrowserRouter>
    </div>

  );
}

export default App;
