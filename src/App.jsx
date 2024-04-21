import React from 'react';
import BusinessForm from './BusinessForm';
import etio from './etio.png';
import './BusinessForm.css'; 
import back from './back.png';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      
      <img src={etio} className="etio" alt="website logo" />
    
    <div>
          <button style={{ backgroundColor: 'gray', color: 'white', borderRadius: '10px', }}>Add Business</button>
          <button style={{ borderRadius: '10px', backgroundColor: 'white'}}> <img style={{width: '20px', height: '20px'}} src={back} className="back" alt=" " />Back</button>
      </div>
    <BusinessForm />

      

      
      <Footer />
   
    </div>
  );
};

export default App;
