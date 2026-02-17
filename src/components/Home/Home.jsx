import React from "react";
import "../../scss/Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="divImgHome">
        <img src="https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/mi%20sqr%20black%20500px.jpg?alt=media&token=8c0d2a86-ce95-41fb-ade3-f9d7d3d8e97a" alt="" />
      </div>
      <div className="descHome">
        <span className="helloHome">Hello,</span>
        <span className="nameHome">I&apos;m Cristian Hernández</span>
        <span className="fullstackHome">Full Stack Web Developer</span>
      </div>
    </div>
  );
}

export default Home;
