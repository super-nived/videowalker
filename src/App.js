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
import AdminEdit from './pages/AdminEdit';
import Updating from './admin/crud/Update';
import { TimeOverProvider } from './context/Context';



function App() {
  return (

    <div className="App">
        <TimeOverProvider>
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
          <Route path='/Crud' element={<AdminEdit></AdminEdit>}></Route> 
          <Route path='/update/:documentId' element={<Updating></Updating>}></Route> 
        </Routes>
        {/* </ScrollToTop>   */}
      </BrowserRouter>
      </TimeOverProvider>
    </div>

  );
}

export default App;
