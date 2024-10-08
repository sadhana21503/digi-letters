import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import LetterType from './pages/lettertype/LetterType';
import Home from './pages/home/Home';
import Digi from './pages/digiletters/Digi';
import LetterForm from './pages/form/LetterForm';
import LetterPreview from './pages/view/LetterPreview';
import Status from './pages/status/Status';
import View from './pages/status/View';
import THome from './pages/teacher/thome';
// import HHome from './pages/hod/HHome';
import LetterList from './components/letterlist/LetterList';
import Letter from './components/letter/Letter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Digi />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/lettertype" element={<LetterType/>} /> 
        <Route path="/form/:letterType" element={<LetterForm />} />
        <Route path="/letter-preview" element={<LetterPreview />} />
        <Route path="/status" element={<Status/>}/>
        <Route path="/letter-view" element={<View/>}/>
        <Route path="/teacher" element={<THome/>}/>
        {/* <Route path="/hod" element={<HHome/>}/> */}
        <Route path="/letterlist" element={<LetterList/>}/>
         <Route path="/letter" element={<Letter/>}/>
      </Routes>
    </Router>
  );
};

export default App;
