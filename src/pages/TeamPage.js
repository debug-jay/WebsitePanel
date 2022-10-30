
// Imports of Components
import { TeamListComponent } from "../components/TeamPage/TeamListComponent";

export const TeamPage = () => {

    return(
        
        <div className="overflow-hidden">
            <div className='absolute shadow-md top-0 left-0 bg-blue-500 h-52 w-full -z-20 opacity-40 overflow-hidden'>

            </div>
            <div className=" -z-10" id="loadedpage"><p className="text-3xl font-semibold px-6 mt-5 mb-5 md:mb-0">Team Page</p>
            
            <div className="">
            <TeamListComponent/>
            </div>

            </div>
            
        </div>
       
    );
}