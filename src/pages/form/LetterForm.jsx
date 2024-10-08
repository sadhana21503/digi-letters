import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LetterForm.scss';

const LetterForm = () => {
  const { letterType } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    srn: '',
    year: '',
    Sem: '',
    subject: '',
    purpose: '',
    receiverEmail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/letter-preview', { state: formData });

  };

  const handleBack = () => {
    navigate('/lettertype');
  };

  return (
    <section className='form-section'>
      <h2> Fill {letterType} Form</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Name' onChange={handleChange} required />
        <input type='text' name='address' placeholder='Address' onChange={handleChange} required />
        <input type='text' name='city' placeholder='City' onChange={handleChange} required />
        <input type='text' name='srn' placeholder='SRN' onChange={handleChange} required />
        <input type='text' name='year' placeholder='Year' onChange={handleChange} required />
        <input type='text' name='Sem' placeholder='Sem' onChange={handleChange} required />
        <input type='text' name='subject' placeholder='Subject' onChange={handleChange} required />
        <textarea name='purpose' placeholder='Purpose of Letter' onChange={handleChange} required />
        <input type='email' name='receiverEmail' placeholder='Receiver Email ID' onChange={handleChange} required />
        <div className='form-buttons'>
          <button type='button' onClick={handleBack}>Back</button>
          <button type='submit'>Next</button>
        </div>
      </form>
    </section>
  );
};

export default LetterForm;
