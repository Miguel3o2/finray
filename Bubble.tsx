import React, { useState } from "react";

import "./Contentdrop.css"


interface StepProps {
  stepNumber: number;
  title: string;
  content: string;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="step-container">
      <div className="step-header" onClick={toggleOpen}>
        {stepNumber}. {title} <span className="toggle-icon">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && <div className="step-content">{content}</div>}
    </div>
  );
};

const Bubble: React.FC = () => {
  const steps: Array<{ title: string; content: string }> = [
    { title: 'Link your utility bill to a solar farm', content: 'Connect your existing electric account with a nearby solar farm. You just need a copy of your recent utility bill. Enroll online in under 2 minutes, completely free.' },
    { title: 'Match with a green energy project', content: 'Our partner matches you to a local solar farm. Based on your annual consumption, your home is allocated a share of the electricity that the project generates.' },
    { title: 'Start generating green energy', content: 'When there is sunshine, the solar farm generates power and feeds it to your community’s electric grid.' },
    { title: 'Receive solar credits', content: 'Your utility bill is credited for the amount of solar energy that was generated for you during this billing cycle, reducing the electric portion you pay the utility (see example below). ' },
    { title: 'Autopay for your green energy', content: 'A couple days after your reduced utility bill arrives, you autopay your solar farm directly for your solar credits at the guaranteed discount of 5-20% (depending on region & utility).' },
  ];

  return (
    <div className="bubble-container">
      <div className="image-container">
    <div className="image-overlay"></div>
    <img  src="https://test.techharbors.com/wp-content/uploads/2024/09/IMG_4109-scaled.webp" alt="Family House" className="family-house-image" />
</div>
      <div className="bubble-title"><p className="sub">How it works?</p>
      <h2 className="title">How Does it Work?</h2>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <Step
            key={index}
            stepNumber={index + 1}
            title={step.title}
            content={step.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Bubble;
