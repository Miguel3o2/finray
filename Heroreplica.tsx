import React from 'react';
import UntitledDesign66 from "./images/Untitled-design-66.jpeg"
import UntitledDesign67 from "./images/Untitled-design-67.jpeg"
import "./Heroreplica.css"

interface Benefit {
  id: number;
  title: string;
  description: string;
}
const Heroreplica: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Environmentally Friendly",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 2,
      title: "Reserve Energy",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 3,
      title: "Save The Earth",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
  ];

  return (
    <div className="enrollment-container">
      <div className="enrollment-header">
        <span className="subtitle">WHY RENEWABLE ENERGY?</span>
        <h1 className="title">HOW THE ENROLLMENT PROCESS WORKS?</h1>
        <p className="description">
          Community solar makes renewable energy accessible to everyone, 
          regardless of property ownership or roof suitability. Participants share the 
          benefits of a single solar array, often located off-site, allowing them to 
          enjoy reduced electricity costs and support green energy.
        </p>
      </div>

      <div className="content-wrapper">
        <div className="images-section image-pair ">
          <div className="image-container primary image-anime">
            <img 
              src={UntitledDesign66} 
              alt="Solar panels close-up"
              className="main-image" 
            />
            <div className='scroll-container'><span className="image-label orange scroll-item">Environmentally Friendly</span></div>
          </div>
          <div className="image-container secondary image-anime">
            <div className='scroll-container'><span className="resource-label scroll-item">Renewable Resource</span></div>
            <img 
              src={UntitledDesign67}
              alt="Solar farm aerial view"
              className="secondary-image" 
            />
          </div>
        </div>

        <div className="benefits-section">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-item">
              <div className="benefit-number">
                {benefit.id}
              </div>
              <div className="benefit-content">
                <h2 className="benefit-title">{benefit.title}</h2>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroreplica;
