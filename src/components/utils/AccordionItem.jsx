import React, { useEffect, useState } from "react";

import "./AccordionItem.css";

import Arrow from "../../assets/images/icon-arrow.svg";

const AccordionItem = (props) => {
  const [openQuestion, setOpenQuestion] = useState(false);

  useEffect(() => {
    console.log("entered");
    if (props.index === props.currentlyActive) {
      setOpenQuestion(true);
    } else {
      setOpenQuestion(false);
    }
  }, [props.currentlyActive]);

  function onQuestionClicked() {
    props.changeQuestion(props.index);
  }


  return (
    <div
      className="bookmark__faq-accordion-item-container"
      onClick={onQuestionClicked}
    >
      <div className="bookmark__faq-accordion-item-header-container">
        <div className="bookmark__faq-accordion-item-text">
          <p>{props.question}</p>
        </div>
        {openQuestion ? (
          <img src={Arrow} alt={Arrow} style={{ rotate: "180deg" }} />
        ) : (
          <img src={Arrow} alt={Arrow} />
        )}
      </div>
      {openQuestion && (
        <div className="bookmark__faq-accordion-item-answer-container">
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
