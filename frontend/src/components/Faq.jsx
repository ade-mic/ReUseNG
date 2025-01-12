import React, { useState } from "react";
import "../styles/Faq.css";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const questions = [
  {
    question: "What if no one contacts me about my item?",
    answer:
      "If your item doesn’t get any interest, try updating the description or price, adding better photos, or sharing your listing on social media.",
  },
  {
    question: "How do I mark an item as sold?",
    answer: "You can mark an item as sold from your account dashboard under 'My Listings'.",
  },
  {
    question: "Is there a fee to list items?",
    answer: "No, ReUseNG does not charge a fee to list items for sale or for free.",
  },
];

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqQuestion">
      <h2 onClick={() => setIsOpen(!isOpen)} className="faqQuestionHeader">
        {question}
        <span className="faqToggleIcon">{isOpen ? <CloseIcon /> : <AddIcon />}</span>
      </h2>
      {isOpen && <p className="faqAnswer">{answer}</p>}
    </div>
  );
};

const Faq = () => (
  <div className="faqContainer">
    <h1 className="faqHeader">Frequently Asked Questions</h1>
    <div className="faqQuestions">
      {questions.map((q, index) => (
        <Question key={index} question={q.question} answer={q.answer} />
      ))}
    </div>
  </div>
);

export default Faq;
