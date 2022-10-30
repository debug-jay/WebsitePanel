import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

export const Chart = ({chartData}) => {

    return(
        <div className=' shadow-lg border bg-white border-gray-500 rounded-md md:mx-5'>
        <Bar data={chartData}/>
                    
        </div>
    );
}