
//#region Component Imports
import { MobileNavigation } from './MobileNavComponent';
import { SideMenuComponent } from './SideMenuComponent';
//#endregion


export const MainLayoutComponent = ({children}) => {

return(

<>

<div className='overflow-x-hidden flex flex-no-wrap h-full md:h-screen'>

{/* FOR DESKTOP NAVIGATION */} 
<div className='hidden relative lg:flex'>
  
   <SideMenuComponent/>
   
</div>

{/* FOR MOBILE NAVIGATION */} 
<div className='flex lg:hidden'>

   <MobileNavigation/>
   
</div>

{/* CHILD PAGES */} 
<div className='container mx-auto py-0 md:w-11/12 w-full md:px-2 mt-20 lg:mt-0 whitespace-nowrap' id="children">
   <div className='w-full h-full rounded '>{children}
   </div>
   </div>
   
</div>

</>);
}