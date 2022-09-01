import React from 'react';
import './style.css';
import '../../App.css';

const Volunteer = () => {
  return (
    <div className='App__experience-volunteer section__padding'>
        <div id="title"><h1>Volunteer Experience</h1></div>
        <hr/>
       <div className='App__experience-volunteer_work section__margin'>
       <div>
       <h3>Marine Rescue NSW Sydney</h3>
       <p>Radio Operator Responsibilities:</p>
       <ul>
        <li>Answer the phone call or by the radio station</li>
        <li>Blast the weather report on the radio</li>
        <li>Data entry</li>
        <li>Report to the manager if an emergency happened</li>
        <li>Support the whole team when needed</li>
       </ul>
       </div>

       <br/>
       <div>
         <h3>NSW AMES</h3>
         <p>Administration Clerk Responsibilities:</p>
         <ul>
          <li>Responsible for telephone and face to face enquiries or information requests at the reception for all kinds of background immigration people</li>
          <li>Registration of clients in the system and filling documents.</li>
          <li>Data entry</li>
          <li>Carrying out a range of other office duties including photocopying, faxing, pay lists delivery, binding material/resources into professionally looking reference booklets for the library</li>
          <li>Support the whole team when needed</li>
         </ul>
         </div>
        </div>
    </div>
  )
}

export default Volunteer