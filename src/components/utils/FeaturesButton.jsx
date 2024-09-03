import React from 'react';

import './FeaturesButton.css';

const FeaturesButton = (props) => {

  let className = "";

  if (props.index === props.activeId) {
    className = "bookmark__features-button-active";
  } else {
    className = "bookmark__features-button";
  }

  function onButtonClicked() {
    props.changeTab(props.index)
  }

  return (
    <>
    <button onClick={onButtonClicked} className={className}>{props.text}</button>
    </>
  )
}

export default FeaturesButton