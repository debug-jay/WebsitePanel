
//#region Component Imports
import { MobileNavigation } from './MobileNavComponent';
import { SideMenuComponent } from './SideMenuComponent';
//#endregion


export const MainLayoutComponent = ({children}) => {

return(

<>

<div className='overflow-x-hidden flex flex-no-wrap h-full md:h-screen'>

{/* FOR DESKTOP */} 
<div className='hidden relative left-0 top-0 bottom-0 h-screen md:flex'>
   
   <SideMenuComponent/>
   
</div>

{/* FOR MOBILE */} 
<div className='flex md:hidden'>
   <MobileNavigation/>
</div>

{/* CHILD PAGES */} 
<div className='container mx-auto py-0 md:w-11/12 w-full md:px-2 mt-20 md:mt-0' id="children">
   <div className='w-full h-full rounded '>{children}
   </div>
   </div>
   
</div>

</>);
}