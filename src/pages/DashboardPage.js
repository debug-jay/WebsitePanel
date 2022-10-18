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

        

            <div className="  -z-10" id="loadedpage"><p className="text-3xl font-semibold  p-5">Dashboard Page</p>
            <div className="grid grid-cols-1 md:grid-cols-2 border-black mt-5">
            
            <div className=' col-span-2 flex justify-center' >
                    <div className='md:w-1/2 shadow'>
                        <Chart chartData={chartData}/>
                    </div>
                </div>

                <div className=" border-gray-500 col-span-2 flex justify-center">
                <div className=" border-gray-500 border rounded-md shadow-md mt-5">
                <props.profitComp/></div>

                </div>
                <div className=" border-gray-500 col-span-2 flex justify-center">
                <div className=" border-gray-500 border rounded-md shadow-md mt-5 mb-20">
                <props.analyticsComp/></div>

                </div>
                
            </div>     
            </div>
        </div>
        </>
    );
}
