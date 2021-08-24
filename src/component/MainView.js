import { React } from "react";

import "./style/mainview.css";
const googleApiKey = "AIzaSyCTVoXmQT4Gvco8NhgExSjPVVeapFqiJ7Q";
const googleMap = "https://maps.googleapis.com/maps/api/staticmap";

function MainView(props) {
  return (
    <div className="main-view-container">
      <div className="row1">
        <h1>{props.bird.name}</h1>
        <audio controls>
          <source src={props.bird.sound} />
        </audio>
      </div>
      <div className="row2">
        <img className="map-img" src={props.bird.image}></img>
        <img
          className="img"
          src={`${googleMap}?center=${props.bird.location.lat},${props.bird.location.lng}
        &key=${googleApiKey}&size=400x400&zoom=2`}
        ></img>
      </div>
    </div>
  );
}

export default MainView;
