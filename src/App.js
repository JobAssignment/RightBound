import "./App.css";
import { React, useEffect, useState, useRef } from "react";
import axios from "axios";

import MainView from "./component/MainView";
import ScrollBar from "./component/ScrollBar";

function App() {
  const [birdArray, setBirdArray] = useState([]);
  const [showView, setShowView] = useState(false);
  const [selectedBird, setSelectedBird] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios({
      method: "GET",
      url: `https://zapari.any.do/birds/20`,
    }).then((res) => {
      setBirdArray((prevArray) => [...prevArray, ...res.data.items]);
    });
  };

  const handleSelectedBird = (bird) => {
    setSelectedBird(bird);
    setShowView(true);
  };

  return (
    <div className="app">
      <div className="container">
        <ScrollBar
          className="scroll-bar"
          fetchData={fetchData}
          birdArray={birdArray}
          handleSelectedBird={handleSelectedBird}
        ></ScrollBar>

        {showView ? <MainView bird={selectedBird}></MainView> : null}
      </div>
    </div>
  );
}

export default App;
