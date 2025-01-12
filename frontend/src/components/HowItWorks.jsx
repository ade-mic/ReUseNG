import React from "react";
import "../styles/HowItWorks.css";

const descriptionSteps = [
  {
    step: "List An Item",
    description: [
      "Take clear photos of your item.",
      "Write a short description, including condition and any special features.",
      "Set a fair price or mark it as free.",
    ],
  },
  {
    step: "Negotiate With Buyer",
    description: [
      "Respond to inquiries through our in-app messaging system.",
      "Be polite and clear when discussing price, pickup location, or delivery options.",
    ],
  },
  {
    step: "Initiate Payment",
    description: [
      "Once price is agreed on, initiate payment request within the chat",
      "Buyer must make payment within 2 hours, else payment request will be invalidated",
    ],
  },
  {
    step: "Buyer Receives the Item",
    description: [
      "Agree on a safe and convenient location for pickup or delivery.",
      "Ensure the item matches the description before handing it over.",
      "Use public locations for safety during meetups.",
    ],
  },
  {
    step: "Receive Payment",
    description: [
      "Payment held by ReUseNG will be released when order completion has been received from both ends.",
      "For free items, simply mark item as 'Gifted' to complete transaction."
    ],
  },
];

const HowItWorksItem = ({ descriptionSteps }) => {
  return (
    <div>
      {descriptionSteps.map((step, index) => (
        <div key={index} className="howItWorksStep">
          <div className="stepNumber"><h2>{index + 1}</h2></div>
          <h3>{step.step}</h3>
          <ul>
            {step.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="howItWorksContainer">
        <h1>How To Sell/Give On ReUseNG</h1>
        <p>
          ReUseNG is a platform where you can list items for sale or for free.
          Here's how it works:
        </p>
      </div>
      <div className="howItWorksSteps">
        <img
          src="/categories-images/how-it-works.png"
          alt="How it works"
          className="howItWorksImage"
        />
        <HowItWorksItem descriptionSteps={descriptionSteps} />
      </div>
    </div>
  );
};

export default HowItWorks;
