import React from 'react';
import {GiVibratingSmartphone} from 'react-icons/gi';
import {MdEmail, MdMyLocation} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai';
import './navbar.css';
import '../../App.css';

const Navbar = () => {
  return (
    <div className='App__navbar section__padding gradient-bg'>
    <div className='App__navbar-head'>
     <h1>Lannie Shao</h1>
     <h5>Junior React Developer</h5>
    </div>

    <div className='App__navbar-details'>
    <div>
    <GiVibratingSmartphone />
    <p>0406 144 995</p>
    </div>

   <div>
   <MdEmail /> 
   <p>Lannie.shao@gmail.com</p>
   </div>

   <div>
   <AiFillGithub />
   <p>github.com/lannie-shao</p>
   </div>

   <div>
   <MdMyLocation /> 
   <p>North Kellyville</p>
   </div>

    </div>  
    </div>
  )
}

export default Navbar