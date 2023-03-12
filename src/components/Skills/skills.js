import React from "react";
import "./Skills.css";
const Skills = () => (
  <div className="skills">
    
    <ul>
      <li>
        <p>Frontend Development</p>
        <div className="bar-graph">
        <div className="frontend-bar">
		      <p className="percent"></p>
	      </div>
        </div>
      </li>
      <li>
        <p>React</p>
        <div className="bar-graph">
          <div className="react-bar">
            <p className="percent"></p>
          </div>
        </div>
      </li>
      <li>
        <p>Bootstrap/Sass</p>
        <div className="bar-graph">
        <div className="bootstrap-bar">
            <p className="percent"></p>
          </div>
        </div>
      </li>
      <li>
        <p>Wordpress</p>
        <div className="bar-graph">
        <div className="wordpress-bar">
            <p className="percent"></p>
          </div>
        </div>
      </li>
      <li>
        <p>Git</p>
        <div className="bar-graph">
        <div className="git-bar">
            <p className="percent"></p>
          </div>
        </div>
      </li>
    </ul>

    
  </div>
);
export default Skills;