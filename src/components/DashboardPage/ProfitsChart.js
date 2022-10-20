import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

export const ProfitsChart = ({chartData}) => {

    return(
        <>
            <div className='shadow border border-gray-500 rounded-md'>
            <Line data={chartData}/>
                        
            </div>
        </>
    );
}