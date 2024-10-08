// LetterType.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LetterType.scss';

const LetterType = () => {
  const navigate = useNavigate();

  const handleLetterTypeClick = (letterType) => {
    navigate(`/form/${letterType}`);
  };

  return (
    <section className='letterTypes-main'>
      <section className='types-top'>
        <h1>Letter Format</h1>
      </section>
      <section className='types-bottom'>
        <button onClick={() => handleLetterTypeClick('Admission Letter')}>Admission Letter</button>
        <button onClick={() => handleLetterTypeClick('Financial Aid Letter')}>Financial Aid Letter</button>
        <button onClick={() => handleLetterTypeClick('Acceptance Letter')}>Acceptance Letter</button>
        <button onClick={() => handleLetterTypeClick('Apology Letter')}>Apology Letter</button>
        <button onClick={() => handleLetterTypeClick('Attendance Letter')}>Attendance Letter</button>
        <button onClick={() => handleLetterTypeClick('Customized Letter')}>Customized Letter</button>
      </section>
    </section>
  );
};

export default LetterType;
