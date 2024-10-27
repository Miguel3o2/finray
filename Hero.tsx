import React from "react";
import UntitledDesign66 from "./images/Untitled-design-66.jpeg"
import UntitledDesign67 from "./images/Untitled-design-67.jpeg"
import "./Hero.css";

const Herobanner: React.FC = () => {
    return (
        <div className="enrollment-container">
          <div className="enrollment-header">
            <h4 className="section-title">WHY RENEWABLE ENERGY?</h4>
            <h1 className="main-heading">HOW THE ENROLLMENT PROCESS WORKS?</h1>
            <p className="description">
              Community solar makes renewable energy accessible to everyone,
              regardless of property ownership or roof suitability. Participants
              share the benefits of a single solar array, often located off-site,
              allowing them to enjoy reduced electricity costs and support green
              energy.
            </p>
          </div>
    
          <div className="enrollment-content">
            <div className="image-section">
              <div className="image-container  image-anime">
                <img src={UntitledDesign66} alt="Solar Panels" className="image image-1" />
                <div className="image-label text-anime">Environmentally Friendly</div>
              </div>
              <div className="image-container  image-anime">
                <img src={UntitledDesign67} alt="Solar Panels" className="image image-2" />
                <div className="image-label text-anime">Renewable Resource</div>
              </div>
            </div>
    
            <div className="text-section">
              <div className="info-box">
                <div className="info-number">1.</div>
                <div className="info-text">
                  <h3>Environmentally Friendly</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>
              </div>
    
              <div className="info-box">
                <div className="info-number">2.</div>
                <div className="info-text">
                  <h3>Reserve Energy</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>
              </div>
    
              <div className="info-box">
                <div className="info-number">3.</div>
                <div className="info-text">
                  <h3>Save The Earth</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Herobanner;
