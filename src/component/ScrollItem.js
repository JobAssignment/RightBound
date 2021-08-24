import React from "react";
import "./style/scrollitem.css";
function ScrollItem(props) {
  const handleClick = () => {
    props.handleSelectedBird(props.bird);
  };
  return (
    <div className="scroll-bird-item" onClick={handleClick}>
      <p>{props.bird.name}</p>
      <img className="img-scroll" src={props.bird.image}></img>
    </div>
  );
}

export default ScrollItem;
