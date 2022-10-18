
// Imports of Components
import { TeamListComponent } from "../components/TeamPage/TeamListComponent";

export const TeamPage = () => {

    return(
        
        <div className="">
            
            <div className="  h-screen -z-10" id="loadedpage"><p className="text-3xl font-semibold  p-5">Team Page</p>
            <TeamListComponent/>
            </div>
            
        </div>
       
    );
}