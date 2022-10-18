import React, { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

import VitalCorpLogo from '../images/VitalCorpLogo.svg';
import UserLogo from './UserLogo.svg';

export const MobileNavigation = () =>
{
    const [show, setShow] = React.useState(false);

    const [showExit, SetShowExit] = useState(false);
    const [showHamburger, SetShowHam] = useState(true);

    const [showProfile, setShowProfile] = useState(false);

    const openNavMenu = () =>{
        SetShowExit(!showExit);     // Changing Button Style
        SetShowHam(!showHamburger); // Changing Button Style

        setShow(!show);             // Menu Open
        setShowProfile(!showProfile);   // Only if User is Logged in Show

        const menuElement = document.getElementById('menuElement');
        const profileElement = document.getElementById('profileElement');

        // if(showExit === false)
        // {
        //     menuElement.className = '';
        //     profileElement.className = '';
        // } else {
            
        //     menuElement.className = '';
        //     profileElement.className = '';
        // }
    }



  return(
    <div className='fixed w-full z-50'>
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 bg-opacity-30 backdrop-blur-sm  p-4" id="navbar">
      

  <div className=" items-center flex-shrink-0 text-white mr-0 justify-center md:ml-24 space-x-2 grid grid-cols-2 w-16">
  <div className=' w-9'>
    
      <img src={VitalCorpLogo} alt=""/>
    </div>
    <span className="font-semibold text-xl tracking-wider whitespace-nowrap"><Link to="/">Admin Panel</Link></span>
  </div>
  
  <div className='flex lg:hidden justify-end items-center'>

    <div className="block lg:hidden">
    <button id="navbutton" onClick={()=>openNavMenu()} className="flex items-center px-2 py-0 rounded text-blue-200 border border-white hover:text-white hover:border-white">
      {showHamburger ? <svg className="fill-current h-8 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>:null}
      {showExit ? <div className=''><svg class="h-8 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg></div>:null}
    </button>
  </div>
    </div>

  {show?
    <div className=" grid grid-cols-3 bg-transparent w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:backdrop-blur-none lg:border-none" id='nav-handler'>
    
    <div className="text-md lg:flex-grow lg:flex justify-center items-center ">
      <Link to="/dashboard" className="flex justify-center mt-5 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14 underline">
      Dashboard
      </Link>
      <Link to="/management" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14 underline">
      Management
      </Link>
      <Link to="/inbox" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white underline">
      Inbox
      </Link>
    </div>

    <div className='text-md lg:flex-grow lg:flex justify-center items-center'>
    <Link to="/users" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white underline">
    Users
      </Link>
      <Link to="/products" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white underline">
      Products
      </Link>
      <Link to="/team" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white underline">
      Team
      </Link>
    </div>


    <div className='text-md lg:flex-grow lg:flex justify-center items-center'>
    <Link to="/documentation" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white underline">
    Documentation
      </Link>
      <Link to="/components" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white underline">
      Components
      </Link>
      <Link to="/help" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white underline">
      Help
      </Link>
    </div>

    <div className='lg:mr-5 md:hidden col-span-3 flex justify-center'>
        <Link to="/signin" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 w-1/3">Sign In</Link>
    </div>
    <br/>
  </div>:null}

    {show?<div id="profileElement" className='flex justify-center w-full'>
            <Link to="/profile"><img src={UserLogo} width={'40px'} alt="" className="rounded-full overflow-hidden shadow bg-gray-300" /></Link>
        <div>
            <p className="text-gray-600 text-sm font-medium" id="profilename">&ensp;Profile Name </p>
            <p className="text-gray-600 text-xs" id="profilebutton"><button className='hover:underline'>&ensp;View Profile</button></p>
        </div>
    </div>:null}
</nav>
<Outlet/>
</div>);
    
}
