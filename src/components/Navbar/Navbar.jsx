/* eslint-disable react/prop-types */
import React from "react";
import "../../scss/Navbar.scss";

function Navbar({
  executeScroll,
  homeRef,
  projectsRef,
  skillsRef,
  contactRef,
}) {
  return (
    <div className="navBar">
      <button type="button" className="buttonNavBar" onClick={() => executeScroll(homeRef)}>Home</button>
      <span className="barNB">|</span>
      <button type="button" className="buttonNavBar" onClick={() => executeScroll(projectsRef)}>Projects</button>
      <span className="barNB">|</span>
      <button type="button" className="buttonNavBar" onClick={() => executeScroll(skillsRef)}>Skills</button>
      <span className="barNB">|</span>
      <button type="button" className="buttonNavBar" onClick={() => executeScroll(contactRef)}>Contact</button>
    </div>
  );
}

export default Navbar;
