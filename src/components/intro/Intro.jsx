import React from "react";
import me from "../../image/profilepix.jpeg";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Franklin Osigwe</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Front-End Engineer</div>
              <div className="i-title-item">PERN STACk</div>
              <div className="i-title-item">Software Tester</div>
            </div>
          </div>

          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            dolore. Accusantium cum dolor, quod dolore perspiciatis magni odit
            aliquam sit natus vel, consequuntur voluptas delectus quisquam,
            eaque similique quasi ut?
          </p>
        </div>

        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"> </div>
        <img src={me} alt="mypix" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
