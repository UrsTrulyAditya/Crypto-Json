import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom';
import moment from 'moment';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2'; 
import { CircularProgress } from '@mui/material';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
const Chart = () => {

    const [historicData, setchartData] = useState();
    const { id } = useParams();
    // console.log(id)

    const getCoinsHistory=()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=15&interval=daily`).then((res)=>{
            setchartData(res.data.prices);
        }).catch((err)=>(console.log(err)));  

     }

    useEffect(() => {
        getCoinsHistory();
    }, [])

    if(!historicData){
        return  <div className='text-center'>

        <CircularProgress
        style={{ color: "rgb(53, 162, 235)" }}
        size={100}
        thickness={1}
        />
        </div>
    }
    const coinData=historicData.map(each=>({
            x:each[0],y:each[1].toFixed(2)
        }))
    // console.log(coinData)

    const options={
        responsive:true
    }
    
    const data={
        labels: coinData.map(each=> moment(each.x).format('MMM DD')),
        datasets:[
            {
                fill:true,
                label:id,
                data:coinData.map(each=> each.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
             
            }
        ]
    }
    return (
        <div>
            <Line options={options} data={data} />

        </div>
    )
}

export default Chart