import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    registerables,
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from "react-chartjs-2";
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
    , ...registerables
);
    const labels = ["자기주도학습", "교육환경", "언어능력", "책에대한관심도", "작문능력","사고/창의력","계획성"];
export const data = {
        labels,
        datasets: [
            {
                label: "",
                backgroundColor: "rgba(34, 202, 236, .2)",
                borderColor: "rgba(34, 202, 236, 1)",
                pointBackgroundColor: "rgba(34, 202, 236, 1)",
                poingBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(34, 202, 236, 1)",
                data: [13, 10, 12, 6, 5, 10, 10]
            }
        ]
        };



        let options = {
            scales: {
                r:{
                    max: 20,
                    min: 0,
                    ticks: {
                        stepSize: 2,
                        color: 'red',
                        font:{
                            size: 15
                        }
                    },
                    grid: {
                        circular: true,
                        color: 'pink'
                    },
                    pointLabels: {
                        color: 'black'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 20
                        }
                    }
                }
            },
            layout: {
                padding: 20
            }
        };

const Radarchart = () =>{
    const [studydata, setstudydata] = useState('')

    useEffect(() => {
        axios.get('/api/studytest')
            .then(response => setstudydata(response.data))
            .catch(error => console.log(error))
    }, []);
return (

    <div>
        <h1>{studydata}</h1>
    <Radar options={options}
    data={data} 
    width={2000}
    height={3000}/>
    </div>
    )
};

export default Radarchart;