import React from "react";
// import HeroImg from "../assets/hero.svg"
// import FeatImg from "../assets/feat.svg"
import { Link } from "react-router-dom";
import lungsBlueGraphic from "../Images/lungsBlueGraphic.png";

export default function HomePage() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", margin: "50px", marginTop: "60px" }}>
          <h2>Who Are We?</h2>
          <p>
            CareHive is a web application with ML integration that helps
            determine normal chest x-rays vs pneumonic chest x-rays. We
            leveraged an open source dataset from Kaggle to train our model. Our
            application can help ensure that there is proper diagnosis and help
            reduce medical error in imaging. The application gives users a
            portal to upload chest x-rays which is then run against a ML model
            to detect pneumonia in chest x-rays.
          </p>
        </div>
        <img
          src={lungsBlueGraphic}
          alt=""
          style={{ width: "30%", height: "30%", marginTop: '30px' }}
        />
      </div>
    </div>
  );
}
