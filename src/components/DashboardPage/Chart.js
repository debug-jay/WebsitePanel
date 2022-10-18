import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

export const Chart = ({chartData}) => {

    return(
        <div className='shadow border border-gray-500 rounded-md'>
        <Bar data={chartData}/>
                    
        </div>
    );
}