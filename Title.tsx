import React from "react"; 

import "./Title.css"
 
const Titlebanner: React.FC = () => {
    return (
      <div
      className="header-banner"
      style={{
        background: `linear-gradient(rgba(36, 45, 108, 0.8), rgba(36, 45, 108, 0.8)), 
                     url(https://test.techharbors.com/wp-content/uploads/2024/09/IMG_2863-1-scaled.webp)`,
        backgroundColor: 'rgba(36, 45, 108, 0.9)', // Fallback color
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
          <div className="banner-content">
            <h1 className="banner-title">Customer Enrollment</h1>
            <div className="breadcrumb">
              <a href="#" className="bread">Home</a>
              <span>/</span>
              <span>Customer Enrollment</span>
            </div>
          </div>
        </div>
      );
    };
  
  export default Titlebanner;
