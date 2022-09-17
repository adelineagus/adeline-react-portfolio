import React from "react";
import resume from "../../assets/img/Resume.pdf"
import '../../assets/css/style3.css'

function Resume(file) {
  return (
    <main class="section-flex center">
      <div class= "resume-content center"><h1><a href={resume}> Click here for my resume!</a></h1></div>
      <div class= "resume-content center">
        <ul class= "skill-list">
          <h3>Front-End</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
        <ul class= "skill-list">
          <h3>Back-End</h3>
          <li>Node</li>
          <li>Express</li>
          <li>Javascript</li>
          <li>APIs</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </main>
  );
}


export default Resume