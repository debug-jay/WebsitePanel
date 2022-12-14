import {Link} from 'react-router-dom';
import { useState } from 'react';

import { getAuth } from '../hooks/getAuth';

// Business Image
import image from '../images/VitalCorpLogo.svg';

import UserLogo from './UserLogo.svg';

export const SideMenuComponent = () => {

    
    const [showExit, SetShowExit] = useState(true);
    const [showHamburger, SetShowHam] = useState(false);

    const [menuSwitch, SetMenuSwitch] = useState(true);  // If true Menu is Open


    const openNavMenu = () => {

        const menu1 = document.getElementById('miniMenu1');
        const menu2 = document.getElementById('miniMenu2');

        const logotext = document.getElementById('logotext');

        const innerTextComps = document.querySelectorAll('#query1, #query2, #query3, #query4, #query5, #query6, #query7, #query8, #query9, #query10');
        const inboxNotif = document.getElementById('inbox');
        const MainSelection = document.getElementById('mainLoad');
        const profilebutton = document.getElementById('profilebutton');
        const profilename = document.getElementById('profilename');

        
        SetShowExit(!showExit);     // Changing Button Style
        SetShowHam(!showHamburger); // Changing Button Style
         // Menu Is Open By Default, This Makes it False, & Vise Versa

        // Once User Opens Menu Do
        if(menuSwitch === true)     // Checking to See if is Open
        {
         menu1.className = ' transition-all w-16 overflow-hidden relative md:flex bg-gray-900 shadow md:h-screen h-full fixed flex-col justify-between rounded-tr rounded-br';
         menu2.className = ' transition-all w-16 overflow-hidden relative  overflow-y-auto py-4 px-3 bg-gray-50 rounded-tr rounded-br dark:bg-gray-800 fixed h-full md:h-screen';
         
         logotext.className = 'hidden';
         if(getAuth())
         {
            profilename.className = 'hidden';
            profilebutton.className = 'hidden';
         }
            

            innerTextComps.forEach(element => {
                element.className = 'hidden';
            });
            inboxNotif.className = 'hidden';
            MainSelection.className = 'hidden';


            
        }
        else
        {
         menu1.className = 'transition-width w-64 overflow-hidden relative flex bg-gray-900 shadow h-full fixed flex-col justify-between rounded-tr rounded-br';
         menu2.className = 'transition-width w-64 overflow-hidden relative  overflow-y-auto py-4 px-3 bg-gray-50 rounded-tr rounded-br dark:bg-gray-800 fixed h-full';
         
         setTimeout(function(){
            if(getAuth())
            {
               profilename.className = 'text-gray-600 text-sm font-medium flex-1';
               profilebutton.className = 'text-gray-600 text-xs';
            }
            
            logotext.className = 'flex justify-center items-center text-white';
         },300);
           
            innerTextComps.forEach(element => {
                element.className = 'ml-3 flex-1';
            });
            inboxNotif.className = 'inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200';
            MainSelection.className = 'inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300';
            
        }

        SetMenuSwitch(!menuSwitch);
    }

    return(

<>

<div className='overflow-x-hidden overflow-hidden flex flex-no-wrap h-full z-10' id="sideMenu">

<div className='transition-width overflow-x-hidden hidden sm:relative ease w-64 md:block bg-gray-900 shadow-md h-screen fixed flex-col justify-between rounded-tr rounded-br' id='miniMenu1'>
<div className="transition-width overflow-x-hidden sm:relative overflow-y-auto py-4 px-3 bg-gray-50 rounded-tr rounded-br dark:bg-gray-800 w-64 fixed h-screen" id='miniMenu2'>
<div className=" flex justify-end">
    <button id="navbutton" onClick={()=>openNavMenu()} className="flex items-center px-2 py-0 rounded text-blue-200 border border-white hover:text-white hover:border-white">
      {showHamburger ? <svg className="fill-current h-8 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>:null}
      {showExit ? <div className=''><svg className="h-8 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg></div>:null}
    </button>
  </div>
    <div className='flex justify-center mt-5'><img width={'50px'} src={image} alt=""/><p className='flex justify-center items-center text-white' id="logotext">&ensp;Admin Panel</p></div>
    
    {getAuth() == 'true' ? <div className='flex justify-center border-gray-700 pt-5'><Link to="/account"><img src={UserLogo} width={'40px'} alt="" className="rounded-full overflow-hidden shadow bg-gray-300" /></Link><div>
    
    <p className="text-gray-300 text-sm font-medium flex-1" id="profilename">&ensp;Profile Name </p>
    <p className="text-gray-500 text-xs" id="profilebutton"><button className='hover:underline'><Link to="/account">&ensp;View Profile</Link></button></p>
</div>
</div> : null}

    
      <nav>
        <ul className="space-y-2 mt-4 border-t border-gray-700 pt-4">
         <li id="li1">
            <Link to="/dashboard" className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query1">Dashboard</span>
               <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300" id="mainLoad">Main</span>
            </Link>
         </li>
         <li id="li2">
            <Link to="/management" className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query2">Management</span>
            </Link>
         </li>
         <li id="li5">
            <Link to="/products" className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query3">Products</span>
            </Link>
         </li>
         <li id="li3">
            <Link to="/inbox" className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query4">Inbox</span>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200" id="inbox">0</span>
            </Link>
         </li>
         <li id="li4">
            <Link to="/team" className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query5">Team</span>
            </Link>
         </li>
         {/** Sign In List Item */}
         {getAuth() == 'true' ? null : <li id="li5">
            <Link to="/signin" className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query6">Sign In</span>
            </Link>
         </li> }
         {/** Sign Up List Item */}
         {/* <li> 
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li> */}
      </ul>
      <ul className="pt-4 mt-4 space-y-2 border-t border-gray-700 ">
         <li id="li6">
            <Link to="/members" className="flex items-center p-2 text-base font-normal  rounded-lg transition duration-75 hover:bg-gray-700 text-white group">
               <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query7">Members</span>
            </Link>
         </li>
         <li id="li7">
            <Link to="/documentation" className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-700 text-white group">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query8">Documentation</span>
            </Link>
         </li>
         <li id="li8">
            <Link to="/components" className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-700 text-white group">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query9">Components</span>
            </Link>
         </li>
         <li id="li9">
            <Link to="/help" className="flex items-center p-2 text-base font-normal  rounded-lg transition duration-75 hover:bg-gray-700 text-white group">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
               <span className="ml-3 flex-1 whitespace-nowrap" id="query10">Help</span>
            </Link>
         </li>
      </ul>
      </nav> 
      

   </div>
   
</div>

   
</div>

</>
       
    );
}