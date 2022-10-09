import React from "react";
// import HeroImg from "../assets/hero.svg"
// import FeatImg from "../assets/feat.svg"
import { Link } from "react-router-dom";
import lungsBlueGraphic from "../Images/lungsBlueGraphic.png";
import machineLearningBrain from "../Images/machineLearningBrain.png";

export default function HomePage() {
  return (
    <div
    >
      <h1
        style={{
          marginTop: "60px",
          fontSize: "60px",
          background: "linear-gradient(45deg, #9fc3ed, #0f55a6)",
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        CareHive
      </h1>

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
          style={{ width: "30%", height: "30%", marginTop: "30px" }}
        />
      </div>

      <div style={{ display: "flex" }}>
        <img
          src={machineLearningBrain}
          alt=""
          style={{
            width: "30%",
            height: "30%",
            marginTop: "30px",
            marginLeft: "50px",
          }}
        />
        <div style={{ width: "50%", margin: "50px", marginTop: "60px" }}>
          <h2>What Our Model Accomplishes</h2>
          <p>
            Using a machine learning, our model is able to perform early
            detections of pneumonia, thus, helping healthcare professionals in
            diagonising this diease and hopefully, providing relief to those
            affected by this disease.
          </p>
        </div>
      </div>
    </div>
  );
}
