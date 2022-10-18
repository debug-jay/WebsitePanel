import {Link} from 'react-router-dom';
import { useState } from 'react';

import { MobileNavigation } from './MobileNavComponent';
import { SideMenuComponent } from './SideMenuComponent';

// Business Image
import image from '../images/VitalCorpLogo.svg';

import UserLogo from './UserLogo.svg';

export const MainLayoutComponent = ({children}) => {


    return(

<>

<div className='overflow-x-hidden flex flex-no-wrap h-full md:h-screen'>

<div className='hidden md:flex'>
   <SideMenuComponent/>
</div>

<div className='flex md:hidden'>
   <MobileNavigation/>
</div>

<div className='container mx-auto py-0 md:w-4/5 w-11/12 md:px-6 mt-20 md:mt-0' id="children">
   <div className='w-full h-full rounded '>{children}
   </div>
   </div>
   
</div>

</>
       
    );
}