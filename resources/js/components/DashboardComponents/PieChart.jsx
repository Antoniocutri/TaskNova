import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function PieChart({percentage}) {

    const series = [
        percentage?.pending ?? 0,
        percentage?.completed ?? 0,
        percentage?.overdue ?? 0
    ];

    const [state, setState] = useState({
        
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            legend: {
                position: 'top'
            },
            colors: ['#fcb700', '#00d390', '#ff637d'],
            labels: ['In corso', 'Completate', 'Scadute'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
        
    });

    return (
        <div>
            <div id="chart" className="card bg-base-300 border border-base-200 shadow-sm p-5 m-5">
                <ReactApexChart options={state.options} series={series} type="pie" width="100%" />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}
