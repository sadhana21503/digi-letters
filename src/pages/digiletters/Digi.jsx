import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Digi.scss';

const Digi = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login'); 
    };

    return (
        <div className="first-page">
            <h1>DIGI LETTERS</h1>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
};

export default Digi;
