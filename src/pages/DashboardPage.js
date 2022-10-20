import { useState } from 'react';
import { Chart } from '../components/DashboardPage/Chart';
import {Chart as ChartJS} from 'chart.js/auto';
import {ChartData} from '../components/DashboardPage/ChartData'
// Imports of Components

export const DashboardPage = (props) => {

    const [chartData, setchartData] = useState({
        labels: ChartData.map((data)=>data.year),
        datasets: [{
            label: "Users Gained",
            data: ChartData.map((data)=>data.userGain)
        }]
    });

    return(
        <>
        <div className="">

        

            <div className=" -z-10" id="loadedpage"><p className="text-3xl font-semibold  py-5">Dashboard Page</p>
            <div className="md:space-x-3 grid grid-cols-1 md:grid-cols-2 border-black">
            
            <div className=' col-span-1 flex justify-center items-center' >
                    <div className='w-full shadow-md'>
                        <Chart chartData={chartData}/>
                    </div>
                </div>

                <div className=" border-gray-500 col-span-1 flex justify-center bg-transparent">
                <div className=" border-gray-500 rounded-md mt-5 md:mt-0 w-full">
                <div className='border border-gray-500 rounded-md shadow-md '>
                    <props.profitComp/>
               </div>
                <div className='border border-gray-500 rounded-md shadow-md 2xl:mt-11 hidden 2xl:flex'>
                    
                <props.analyticsComp/></div>
                </div>

                </div>
                <div className=" border-gray-500 col-span-1 md:col-start-2 flex justify-center">
                <div className=" border-gray-500 border rounded-md shadow-md mt-5 w-full 2xl:hidden">
                <props.analyticsComp/>
                </div>

                </div>
                
            </div>     
            </div>
        </div>
        </>
    );
}
