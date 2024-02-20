import './App.css';
import React, {useState} from 'react'
import Login from './pages/login'
import ProfileListing from './pages/profileListing'
import Profile from './pages/profile'
import ProtectedRoutes from './utils/protectedRoutes'
import NotFound from './pages/notfound';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element = {<NotFound />} />
          <Route path="/" element = {<Navigate to="/login" replace/> } />
          <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>}>
            <Route path="/profileListing" element = {<ProfileListing />} />
            <Route path="/profile/:id" element = {<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;  