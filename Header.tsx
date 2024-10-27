import React, { useState } from "react";
import enrollmentLogo from "./images/enrollment-logo.png" 

export default function Header() {
    const [showServices, setShowServices] = useState(false);
    const [showEnrollment, setShowEnrollment] = useState(false);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    src={enrollmentLogo} className="logo" 
                    alt="Description of the content"
                />
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <h3>Home</h3>
                <h3>About us</h3>
                    <h3 
                    onMouseEnter={() => setShowServices(true)} 
                    onMouseLeave={() => setShowServices(false)} 
                    style={{ position: 'relative' }} 
                >
                    Services
                  {showServices && (
                <div className={`dropdown ${showServices ? 'show' : ''}`}>
                       <h4>Community Solar</h4>
                       <h4>Rooftop Solar</h4>
                       <h4>Energy Supply Options</h4>
                </div>
                )}
                </h3>
                <h3>Blogs</h3>
                <h3>Career</h3>

                <h3 
                    onMouseEnter={() => setShowEnrollment(true)} 
                    onMouseLeave={() => setShowEnrollment(false)} 
                    style={{ position: 'relative' }} 
                >
                   Enrollment
                   {showEnrollment && (
                   <div className={`dropdown ${showEnrollment ? 'show' : ''}`}>
                        <h4>Agent Enrollment</h4>
                        <h4>Customer Enrollment</h4>
                        <h4>Partnership</h4>
                </div>
    )}
</h3>

                    
                    
                <h3>Contact us</h3>
                <h3>Register</h3>
                </div>

                <div className="buttonele">
                    <button className="button">Agent Enrollment</button>
                </div>
            </div>
        </>
    );
}
