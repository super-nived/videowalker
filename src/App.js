import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mains from './pages/Mains';
import Cnt from './pages/Cnt';
import AboutPage from './pages/About';
import Game from './pages/About';
import Admin from './pages/Admin';
import AdvertiserPage from './pages/Advertiser';
import TresureDetails from './pages/TresureDetails';
import AdminEdit from './pages/AdminEdit';
import Updating from './admin/crud/Update';
import { ClickedProvider, TimeOverProvider } from './context/Context';
import Login from './componants/Login/Login';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';
import YouTubeFrame from './componants/Youtubeframe/YouTubeFrame';



function App() {
  return (

    <div className="App">
      <AuthProvider>
        <TimeOverProvider>
          <ClickedProvider>
            <BrowserRouter>
              {/* <ScrollToTop> */}
              <Routes>
                <Route exact='/' path='/' element={<Mains />} />
                <Route path='/advertisers' element={<AdvertiserPage />}></Route>
                <Route path='/tresuredetails' element={<TresureDetails />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/contact' element={<Cnt />}></Route>
                <Route path='/game' element={<YouTubeFrame></YouTubeFrame>}></Route>
                <Route path='/admin' element={<Admin></Admin>}></Route>
                <Route path="/admin" element={<PrivateRoute />}>
                  <Route index element={<Admin />} />
                  <Route path="edit" element={<AdminEdit />} />
                  <Route path="update/:documentId" element={<Updating />} />
                </Route>
                <Route path='/update/:documentId' element={<Updating></Updating>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
              </Routes>
              {/* </ScrollToTop>   */}
            </BrowserRouter>
          </ClickedProvider>
        </TimeOverProvider>
      </AuthProvider>
    </div>

  );
}

export default App;
