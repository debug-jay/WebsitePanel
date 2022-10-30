import UserLogo from '../UserLogo.svg';
import plusSymbol from '../images/plusSymbol.svg';
import pencilSymbol from '../images/pencilSymbol.svg';
import trashSymbol from '../images/trashSymbol.svg';

export const TeamListComponent = () => {
    return(
        <>
        
            <div className="overflow-hidden w-full -z-20 mt-5">
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 overflow-hidden xl:ml-5 p-4'>

                <div className='flex justify-center'>
                <div className='border rounded-md bg-white h-96 w-80 shadow-lg'>
                    <div className=' flex justify-center'>
                    <div className='border border-black w-20 rounded-full mt-5'>
                    <img src={UserLogo} alt="" className='w-20'/>
                    </div> 
                    </div>

                    <div id="main-body" className='grid grid-cols-1 mt-5'>
                        <div className='flex justify-center'>
                        <p id="team-name" className='text-2xl'>John Wayne</p>
                        </div>

                        <div className='flex justify-center'>
                        <p className=''>Developer</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Contact:</span> 999-745-8834</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Current Task:</span> System Operations</p>
                        </div>

                        <div className='flex justify-center mt-10 w-1/2'>
                        <button className='shadow-md border border-black border-opacity-40 rounded-full p-1 text-white bg-black hover:bg-white hover:text-black'><p className='p-1'>Message</p></button>                        </div>

                    </div>

                </div>
                </div>

                <div className='flex justify-center'>
                <div className='border rounded-md bg-white h-96 w-80 shadow-lg mt-8 md:mt-0'>
                    <div className=' flex justify-center'>
                    <div className='border border-black w-20 rounded-full mt-5'>
                    <img src={UserLogo} alt="" className='w-20'/>
                    </div> 
                    </div>

                    <div id="main-body" className='grid grid-cols-1 mt-5'>
                        <div className='flex justify-center'>
                        <p id="team-name" className='text-2xl'>Thomas Crow</p>
                        </div>

                        <div className='flex justify-center'>
                        <p className=''>Tech Lead</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Contact:</span> 999-745-8834</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Current Task:</span> Technical Managing</p>
                        </div>

                        <div className='flex justify-center mt-10 w-1/2'>
                        <button className='shadow-md border border-black border-opacity-40 rounded-full p-1 text-white bg-black hover:bg-white hover:text-black'><p className='p-1'>Message</p></button>
                        </div>

                    </div>
                </div>
                </div>

                <div className='flex justify-center'>
                <div className='border rounded-md bg-white h-96 w-80 shadow-lg mt-8 xl:mt-0'>
                    <div className=' flex justify-center'>
                    <div className='border border-black w-20 rounded-full mt-5'>
                    <img src={UserLogo} alt="" className='w-20'/>
                    </div> 
                    </div>

                    <div id="main-body" className='grid grid-cols-1 mt-5'>
                        <div className='flex justify-center'>
                        <p id="team-name" className='text-2xl'>Ian Wilson</p>
                        </div>

                        <div className='flex justify-center'>
                        <p className=''>Team Management</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Contact:</span> 999-745-8834</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Current Task:</span> Team Operations</p>
                        </div>

                        <div className='flex justify-center mt-10 w-1/2'>
                        <button className='shadow-md border border-black border-opacity-40 rounded-full p-1 text-white bg-black hover:bg-white hover:text-black'><p className='p-1'>Message</p></button>                        </div>

                    </div>
                </div>
                </div>

                <div className='flex justify-center'>
                <div className='border rounded-md bg-white h-96 w-80 shadow-lg mt-8 2xl:mt-0 mb-10'>
                    <div className=' flex justify-center'>
                    <div className='border border-black w-20 rounded-full mt-5 '>
                    <img src={UserLogo} alt="" className='w-20'/>
                    </div> 
                    </div>

                    <div id="main-body" className='grid grid-cols-1 mt-5'>
                        <div className='flex justify-center'>
                        <p id="team-name" className='text-2xl'>Kayla Johnson</p>
                        </div>

                        <div className='flex justify-center'>
                        <p className=''>Sales Team</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Contact:</span> 999-745-8834</p>
                        </div>

                        <div className='flex justify-center mt-5'>
                        <p className=''><span className='font-bold'>Current Task:</span> Sales & Reporting</p>
                        </div>

                        <div className='flex justify-center mt-10 w-1/2'>
                        <button className='shadow-md border border-black border-opacity-40 rounded-full p-1 text-white bg-black hover:bg-white hover:text-black'><p className='p-1'>Message</p></button>                        </div>

                    </div>
                </div>
                </div>
                </div>
            </div>  
        </>
    );
}