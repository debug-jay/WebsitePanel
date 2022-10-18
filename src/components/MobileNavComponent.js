import React, { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

import VitalCorpLogo from '../images/VitalCorpLogo.svg';
import UserLogo from './UserLogo.svg';

export const MobileNavigation = () =>
{
    const [show, setShow] = React.useState(false);
    const [showLogin, setShowLogin] = useState(false);

    function changeStuff(){
        setShow(!show);
        setShowLogin(!showLogin);
    }



  return(
    <div className='fixed w-full z-50'>
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 bg-opacity-30 backdrop-blur-sm p-4" id="navbar">
      

  <div className=" items-center flex-shrink-0 text-white mr-0 justify-center md:ml-24 space-x-2 grid grid-cols-2 w-16">
  <div className=' w-9'>
    
      <img src={VitalCorpLogo} alt=""/>
    </div>
    <span className="font-semibold text-2xl tracking-wider whitespace-nowrap"><Link to="/">Admin Panel</Link></span>
  </div>
  
  <div className='flex lg:hidden justify-end items-center'>

    <div className='lg:mr-5 hidden sm:block'>
        <Link to="/sigin" className=" flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-4 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white md:mt-0">Sign In</Link>
    </div>
    <div className="block lg:hidden">
    <button onClick={() => changeStuff()} className="flex items-center px-3 py-2 border rounded text-blue-200 border-white hover:text-white hover:border-white">
      <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
    </div>

  {show?
    <div className="grid grid-cols-3 bg-transparent w-full flex-grow lg:flex lg:items-center lg:w-auto  lg:backdrop-blur-none lg:border-none" id='nav-handler'>
    
    <div className="text-md lg:flex-grow lg:flex justify-center items-center">
      <a href="/dashboard" className="flex justify-center mt-5 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
      Dashboard
      </a>
      <a href="/management" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white lg:mr-14">
      Management
      </a>
      <a href="/inbox" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
      Inbox
      </a>
    </div>

    <div className='text-md lg:flex-grow lg:flex justify-center items-center'>
    <a href="/users" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
    Users
      </a>
      <a href="/products" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
      Products
      </a>
      <a href="/team" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
      Team
      </a>
    </div>


    <div className='text-md lg:flex-grow lg:flex justify-center items-center'>
    <a href="/documentation" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
    Documentation
      </a>
      <a href="/components" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
      Components
      </a>
      <a href="/help" className="flex justify-center mt-6 lg:inline-block lg:mt-0 text-white hover:text-white ">
      Help
      </a>
    </div>

    <div className='lg:mr-5 sm:hidden col-span-3 flex justify-center'>
        <Link to="/signin" className="mb-5 lg:mb-0 flex justify-center items-center text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-5 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 w-1/3">Sign In</Link>
    </div>
    <br/>
  </div>:null}

  <div className=' hidden lg:inline-flex'>

    <div className=''>
        <Link to="/signin" className="mb-5 lg:mb-0 flex justify-end items-end text-sm px-4 py-2 leading-none mobile:mr-5 mobile:ml-0 border border-white rounded-md text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign In</Link>
    </div>
    
    </div>
    {show?<div className='flex justify-center w-full'>
            <img src={UserLogo} width={'40px'} alt="" className="rounded-full overflow-hidden shadow bg-gray-300" />
        <div>
            <p className="text-gray-600 text-sm font-medium" id="profilename">&ensp;Profile Name </p>
            <p className="text-gray-600 text-xs" id="profilebutton"><button className='hover:underline'>&ensp;View Profile</button></p>
        </div>
    </div>:null}
</nav>
<Outlet/>
</div>);
    
}
