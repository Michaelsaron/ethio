import React, { useState } from 'react';
import './BusinessForm.css'; 

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    businessEmail: '',
    businessName: '',
    businessCategory: '',
    pinNo: '',
    businessPhoneNumber: '',
    businessStartDate: '',
    businessType: '',
    insertImage: ''
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    

    <div className="business-form-container">

        
        
      <form onSubmit={handleSubmit}>
        <label>Business Email:</label>
        <input type="email" name="businessEmail"placeholder='Business@me' onChange={handleChange} />

        <label>Business Name:</label>
        <input type="text" name="businessName" onChange={handleChange} />

        <label>Business Category:</label>
        <input type="text" name="businessCategory" onChange={handleChange} />

        <label>Pin No:</label>
        <input type="text" name="pinNo" onChange={handleChange} />

        <label>Business Phone Number:</label>
        <input type="tel" name="businessPhoneNumber" onChange={handleChange} />

        <label>Business Start Date:</label>
        <input type="date" name="businessStartDate" onChange={handleChange} />
          
        <label>Insert image:</label>  
        <input type="file" accept="image/*" onChange={handleChange} />
    

        <label>Business Type:</label>
        <input type="checkbox" name="businessType" value="sole" onChange={handleChange} />
        <label>Sole</label>

        <input type="checkbox" name="businessType" value="Partnership" onChange={handleChange} />
        <label>Partnership</label>

        
        <input type="checkbox" name="businessType" value="company" onChange={handleChange} />
        <label>Company</label>

        

        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessForm;
