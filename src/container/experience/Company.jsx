import React from 'react';
import './style.css';
import '../../App.css';

const Company = () => {
  return (
    <div className='App__experience-company section__padding'>
    <h1 id="title">Working Experience</h1>
    <hr/>
    <div className='App__experience-company_work section__margin'>
    <h3>07/2005-2/2014 UTStarcom (NASDAQ: UTSI)</h3>
      <ul>                  
        <p>Compliance Test Engineer Responsibilities:</p>
        <li>Assisted with the environment and mechanical tests.                    
        </li>

        <li>Cooperated with HW team to review schematics/PCB layout and create HW
                  verification environment before testing.
        </li>

        <li>Recommended HW engineers choose eligible providers with their reports and certifications.
        </li>

        <li>Generated pre-test plans and test reports to clients.
        </li>
  
        <li>Applied and finalized FCC/CE/VCCI/CCC/UL certifications with the third-party institute.
        </li>
              
          <li>Supported PJM to ensure the delivery of the production on schedule.
          </li>

        <li>Collaborated with QA to solve the problems encountered in a factory or by clients.
        </li>
               
        <li>Sorted out all the files in project and uploaded them in workflow   
        </li>
      </ul> 
    </div>
    </div>
  )
}

export default Company