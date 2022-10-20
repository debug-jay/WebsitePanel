import { useState } from 'react';
import { Chart } from '../components/DashboardPage/Chart';
import {Chart as ChartJS} from 'chart.js/auto';
import {ChartData} from '../components/DashboardPage/ChartData'
import { ProfitChartData } from '../components/DashboardPage/ProfitChartData';
import { ProfitsChart } from '../components/DashboardPage/ProfitsChart';
// Imports of Components

export const DashboardPage = (props) => {

    const [chartData, setchartData] = useState({
        labels: ChartData.map((data)=>data.year),
        datasets: [{
            label: "Users Gained",
            data: ChartData.map((data)=>data.userGain)
        }]
    });

    const [profitChartData, setProfitChartData] = useState({
        labels: ProfitChartData.map((data)=>data.month),
        datasets: [{
            label: "Monthly Profits",
            data: ProfitChartData.map((data)=>data.profit)
        }]
    })

    return(
        <>
        <div className="">

        

            <div className=" -z-10" id="loadedpage"><p className="text-3xl font-semibold  py-5">Dashboard Page</p>
            <div className=" grid grid-cols-1 md:grid-cols-2  border-black">
            
            <div className='p-1 col-span-1 flex justify-center 2xl:w-4/5 w-full mx-auto items-center' >
                    <div className='w-full shadow-md'>
                        <Chart chartData={chartData}/>
                    </div>
                </div>

                <div className='p-1  hidden col-span-1 md:flex justify-end 2xl:w-4/5 w-full mx-auto items-center' >
                    <div className='w-full shadow-md'>
                        <ProfitsChart chartData={profitChartData}/>
                    </div>
                </div>

                <div className=" border-gray-500 col-span-1 flex justify-center bg-transparent p-6">
                <div className=" border-gray-500 border rounded-md shadow-md w-full ">
                <props.analyticsComp/>
                </div>
                </div>
                
                {/** Shown ONLY On Mobile */}
                <div className='md:hidden col-span-1 flex justify-center md:w-4/5  w-full mt-5 items-center p-1' >
                    <div className='w-full shadow-md'>
                        <ProfitsChart chartData={profitChartData}/>
                    </div>
                </div>

                <div className=" border-gray-500 col-span-1 flex justify-center  bg-transparent p-6">
                <div className=" border-gray-500 rounded-md w-full ">
                <div className='border border-gray-500 rounded-md shadow-md '>
                    <props.profitComp/>
               </div>
                </div>
                </div>
                
                
                
            </div>     
            </div>
        </div>
        </>
    );
}
