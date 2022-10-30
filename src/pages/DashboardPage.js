import { useState } from 'react';
import { Chart } from '../components/DashboardPage/Chart';
import {Chart as ChartJS} from 'chart.js/auto';
import {ChartData} from '../components/DashboardPage/ChartData'
// Imports of Components

export const DashboardPage = (props) => {

    

    const [chartData, setchartData] = useState({
        labels: ChartData.map((data)=>data.month),
        datasets: [{
            label: "Users Gained",
            data: ChartData.map((data)=>data.userGain),
            backgroundColor: [
                "rgba(0,50,200,0.5)"
            ],
            borderColor: [
                "rgba(0,0,0,0.5)"
            ],
            borderWidth: 1,
            borderSkipped: false, 
        },
        {
            label: "Users Lost",
            data: ChartData.map((data)=>data.userLost),
            backgroundColor: [
                "rgba(200,50,100,0.5)"
            ],
            borderColor: [
                "rgba(0,0,0,0.5)"
            ],
            borderWidth: 1,
            borderSkipped: false, 
        },
        {
            label: "Montly Profit",
            data: ChartData.map((data)=>data.profit),
            backgroundColor: [
                "rgba(20,200,0,0.5)"
            ],
            borderColor: [
                "rgba(0,0,0,0.5)"
            ],
            borderWidth: 1,
            borderSkipped: false, 
        }]
    });
    
    

    return(
        <>
        <div className='absolute shadow-md top-0 left-0 bg-blue-500 h-52 w-full -z-20 opacity-40 overflow-hidden'>

        </div>
        <div className="">

        

            <div className="overflow-hidden -z-10" id="loadedpage"><p className="text-3xl font-semibold px-6 mt-5 mb-5 md:mb-0" id="componentText">Dashboard Page</p>
            <div className=" grid grid-cols-1 md:grid-cols-2  border-black md:space-y-0">

                            
            <div className=' mt-2 col-span-1 md:col-span-2 lg:row-start-1 lg:col-span-2 flex justify-center w-full mx-auto items-center border-gray-500' >
                    <div className='w-full xl:w-8/12'>
                        <Chart chartData={chartData}/>
                    </div>
                </div>

                <div className=" border-gray-500 col-span-1 flex justify-center bg-transparent scale-90 lg:row-start-2">
                <div className=" border-gray-500 border rounded-md shadow-md w-full bg-white">
                <props.analyticsComp/>
                </div>
                </div>


                <div className="overflow-hidden border-gray-500 col-span-1 flex justify-center bg-transparent scale-90 lg:row-start-2">
                <div className="overflow-hidden border-gray-500 rounded-md w-full bg-white shadow-lg">
                <div className='border border-gray-500 rounded-md shadow-md overflow-hidden '>
                    <props.profitComp/>
               </div>
                </div>
                </div>
                

                
                <div className=" md:px-6 py-1 overflow-hidden border-gray-500 col-span-1 md:col-span-2 md:grid-cols-3 row-start-4 lg:row-start-3 lg:col-start-1 grid lg:grid-cols-3 bg-transparent">
                <div className=" border-gray-500 rounded-2xl md:mt-0 lg:mr-5 md:mr-2">
                <div className=' border-gray-500 rounded-2xl shadow-md border scale-90'>
                    <props.reProfitComp/>
               </div>
                </div>
                <div className=" border-gray-500 rounded-2xl lg:mt-0 lg:ml-5 md:mr-2 md:ml-2 lg:mr-6">
                <div className=' border-gray-500 rounded-2xl shadow-md border scale-90'>
                    <props.reUserGain/>
               </div>
                </div>
                <div className=" border-gray-500 rounded-2xl lg:mt-0 lg:mr-5 md:ml-2 lg:ml-6">
                <div className=' border-gray-500 rounded-2xl shadow-md border scale-90'>
                    <props.reUserLost/>
               </div>
                </div>
                </div>

            </div>     
            </div>
        </div>
        </>
    );
}
