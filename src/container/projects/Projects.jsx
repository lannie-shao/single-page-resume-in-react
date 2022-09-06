import React from 'react';
import './projects.css';
import '../../App.css';
import index from './index';
import {GiCheckeredFlag} from 'react-icons/gi'

const Projects = () => {
  return (
    <div className='App__experience-container'>

    <hr />
    <div className='App__experience-title'>
    <h1>Projects</h1>
    </div>

    <div className='App__experience-projects'>
    <div className='App__experience-projects_HR section__margin'>
      <h3><GiCheckeredFlag /> Created HR Login System</h3>
        <p className=''>This small application system has 4 pages and realized the basic functions
             for the HR department to log in for checking, creating and saving the accounts 
             data in the files which have been done based on JavaScript, HTML and CSS in the 
             IDE of visual studio code. It achieves letting the existing users who are in the 
             data file to log in or create a new account by generating random passwords according 
             to customer requirements. And then save all the new data in the file. You can also 
             select the admin account from the main menu to display the account information directly.
        </p>
        <br/>
    
        <div className='App__experience-projects_HR-steps'>

        <div className='App__experience-projects_HR-steps_up'>
        <div className='App__experience-projects_HR-steps-1'>
         <p>1. The main menu page for users to choose.</p>
         <img src={index.menu} alt="main menu"/>
        </div>
       
        <div className='App__experience-projects_HR-steps-2'>
         <p>2. When the user input 'L' or 'l', navigate to the login page.</p>
         <img src={index.login} alt="login page"/>
        </div>
        </div>

        <div className='App__experience-projects_HR-steps_down'>
        <div className='App__experience-projects_HR-steps-3'>
         <p>3. When the user input 'C' or 'c', navigate to the register page.</p> 
         <img src={index.create} alt="create account"/>  
        </div>

        <div className='App__experience-projects_HR-steps-4'>                            
         <p>4. When the admin choose 'A' or 'a', navigate to the display page.</p> 
         <img src={index.display} alt="display"/>
        </div>
        </div>
        
        </div>

        </div>

    <div className='App__experience-projects_Pay section__margin'>        
     <h3><GiCheckeredFlag /> Created HR Payroll System</h3>
     <p>This small application system is for the HR department to calculate the weekly wage for 
        two kinds of stuff, one is Tax with a threshold, and another is tax without a threshold.
         This application has been realized by using the C# WPF in IDE visual studio 2022. This 
         project required to use an external tool to reuse the CSV file to get the right factor 
         number and with other input information to calculate, then save the results in a new CSV 
         file as a payslip. And the screen can display all the information of the person you choose 
         from the list for HR to check.
     </p>
    </div>
    <br/>

    <div className='App__experience-projects_Web section__margin'>
      <h3><GiCheckeredFlag /> Web Design in REACT.JS</h3>
      <p> Building a restaurant ordering system fully responsively by using JavaScript, CSS and HTML in React.JS. It includes
        menus and will interact with API to finish a booking reserving system soon.
      </p>       
    </div>
    </div>
    <hr />
    </div>
  )
}

export default Projects