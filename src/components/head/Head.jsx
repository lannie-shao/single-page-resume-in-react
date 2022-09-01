import React from 'react';
import './head.css';
import '../../App.css';

const Head = () => {
  return (
    <div className='App__heading'>
    <div className='App__heading-title'>
      <h1>Main Skills</h1>
      <ul className='App__heading-skills section__padding'>
      <li>Good hand experience in JavaScript, HTML and CSS in REACT.JS</li>
      <li>Familiarity with C#, Python, Bootstrap and SQL</li>
      <li>Familiar with REST API</li>
      <li>Familiarity with IDE VS studio 2022, VS code, MSSM 2019 and PyCharm</li>
      <li>Experience in design react-native APP</li>
      <li>Experience in MS SQL, EXCEL, Power Query,Power Pivot and Power BI.</li>
      <li>Knowledge of GIT, Jira, AWS Cloud and Azure</li>
      <li>Experience in GitHub and Postman </li>
      </ul>
    </div>

    <div className='App__heading-education'>
      <h1>Education</h1>
      <ul className='App__heading-school section__padding'>
      <li>Diploma in Information Technology—Advanced Programming
      <p><span>NSW TAFE Sydney </span>(is studying toward completion)</p></li>
      
      <li>Certificate VI of Information Technology—programming
      <p><span>NSW TAFE Sydney</span>  02/2022-06/2022</p></li>
              
      <li>Master of Radio Physics
      <p><span>University of Electronic Science and Technology of China</span></p></li>
                
      <li>Bachelor of Microwave and Electromagnetic Field
      <p><span>University of Electronic Science and Technology of China</span></p></li>            
      </ul>
    </div>
    </div>
  )
}

export default Head