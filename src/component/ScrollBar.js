import { React, useEffect, useState, useRef } from "react";

import ScrollItem from "./ScrollItem";

import "./style/scrollbar.css";

const birdApi = "https://zapari.any.do/birds/20";
export default function ScrollBar(props) {
  useEffect(() => {
    return () => {
      observer.current.disconnect();
    };
  });
  const observer = useRef();

  const lastBirdRef = (node) => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        props.fetchData();
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  };

  return (
    <div className="bird-list">
      {props.birdArray.map((bird, index) => {
        return (
          <ScrollItem
            key={index}
            bird={bird}
            handleSelectedBird={props.handleSelectedBird}
          ></ScrollItem>
        );
      })}

      <p ref={lastBirdRef}>loading ...</p>
    </div>
  );
}

{
}
