
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BasicInfo from './components/BasicInfo';
import AdditionalQuestions from './components/AdditionalQuestions';
import EnteredDetails from './components/EnteredDetails';
import ThankYouPage from './components/ThankYouPage';
import { About } from './components/About';

function App() {
 const initBasicData = JSON.parse(localStorage.getItem('data')) || {};
 const initQuestionData = JSON.parse(localStorage.getItem('questiondata')) || {};

 const [basicData, setBasicData] = useState(initBasicData);
 const [questionddata, setQuestiondData] = useState(initQuestionData);
 useEffect (() => {
  localStorage.setItem('data', JSON.stringify(basicData));
 }, [basicData]);
 useEffect (() => {
  localStorage.setItem('questionddata', JSON.stringify(questionddata));
 }, [questionddata]);

 const addBasicData = (name, email , contact) => {
  const myBasicData = {
    name: name,
    email: email,
    contact: contact,
  };
  setBasicData(myBasicData);
  localStorage.setItem("data", JSON.stringify(myBasicData));
 }
 const addQuestiondData = (profession, interest, reference) => {
  const myQuestiondData = {
    profession: profession,
    interest: interest,
    reference: reference
  };
  setQuestiondData(myQuestiondData);
  localStorage.setItem("questionddata", JSON.stringify(myQuestiondData));
 }
 return (
  <Router>
    <Routes>
      <Route path='/' element={<BasicInfo addBasicData={addBasicData} />} />
      <Route path='/questions' element={<AdditionalQuestions addQuestiondData={addQuestiondData} />} />
      <Route path='/details' element={<EnteredDetails data={basicData} questionddata={questionddata} />} />
      <Route path='/thanks' element={<ThankYouPage />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </Router>
 );
}

export default App;

