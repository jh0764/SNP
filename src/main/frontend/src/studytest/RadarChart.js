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



const Radarchart = () =>{

    const [data1, setData1] = useState([]);
    useEffect(()=>{
        axios.get('/api/studytest')
            .then((response) => {
                setData1(response.data.reduce((acc, value) => [...acc, ...Object.values(value)], []))
                console.log("성공")
            });
    },[]);
    console.log(data1)

const datas = {
        labels:["언어능력","자기주도학습","교육환경","작문능력","책에대한관심도", "사고/창의력","계획성"],
        datasets: [
            {
                label: "",
                backgroundColor: "rgba(34, 202, 236, .2)",
                borderColor: "rgba(34, 202, 236, 1)",
                pointBackgroundColor: "rgba(34, 202, 236, 1)",
                poingBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(34, 202, 236, 1)",
                data:data1
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



return (

    <div>
        <h1>학습습관검사</h1>
    <Radar options={options}
    data={datas}
    width={2000}
    height={3000}/>

    </div>
    )
};

export default Radarchart;