import React from "react";
import "./Skills.css";
const Skills = () => (
  <div className="skills">
    <ul>
      <li>
        <p>Frontend Development</p>
        <div className="bar-graph">
        <div className="bar">
		      <p className="percent">75%</p>
	      </div>
        </div>
      </li>
      <li>
        <p>React</p>
        <div className="bar-graph">
          <div className="bar">
            <p className="percent">65%</p>
          </div>
        </div>
      </li>
      <li>
        <p>Bootstrap/Sass</p>
        <div className="bar-graph">
        <div className="bar">
            <p className="percent">65%</p>
          </div>
        </div>
      </li>
      <li>
        <p>Wordpress</p>
        <div className="bar-graph">
        <div className="bar">
            <p className="percent">65%</p>
          </div>
        </div>
      </li>
      <li>
        <p>Git</p>
        <div className="bar-graph">
        <div className="bar">
            <p className="percent">65%</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
export default Skills;