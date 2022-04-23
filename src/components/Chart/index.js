/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/27
 */

import {
    Chart as ChartJS,
    // CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import 'chartjs-adapter-dayjs'


ChartJS.register(
    // CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);


// export * from './LineChart'
// export * from './LineRankChart'
// export * from './BarChart'
// export * from './BumpChart'
export * from './LineChart2'
export * from './ColorMap'
