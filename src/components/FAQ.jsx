import React, { useState } from "react";

import "./FAQ.css";
import AccordionItem from "./utils/AccordionItem";

let FAQs = [
  {
    question: "What is Bookmark?",
  },
  {
    question: "How can I request a new browser?",
  },
  {
    question: "Is there a mobile app?",
  },
  {
    question: "What about other Chromium browsers?",
  },
];

const FAQ = () => {
  const [question, setQuestion] = useState();

  function changeQuestion(index) {
    setQuestion(index);
  }

  return (
    <section id="faq">
      <div className="bookmark__faq-container">
        <div className="bookmark__faq-header-container">
          <div className="bookmark__faq-header-content">
            <h1>Frequently Asked Questions</h1>
            <p>
              Here are some of our FAQs. If you have any other questions you'd
              like answered, please feel free to email us.
            </p>
          </div>
        </div>
        <div className="bookmark__accordion-container">
          <div className="bookmark__accordion-items-container">
            {FAQs.map((faq, index) => {
              return (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  changeQuestion={changeQuestion}
                  index={index}
                  currentlyActive={question}
                />
              );
            })}
          </div>
        </div>
        <div className="bookmark__faq-more-info">
            <button>More Info</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
