import React from 'react';
import './herocard.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const HeroCard = () => {
    const [data, setData] = useState([]);
    const [trendData,setTrendData]=useState([]);
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false").then((res) => {

            // imgData.map((each)=>console.log(each.image))
            setData(res.data);
            //    console.log(res.data)
        })
        
        
    }, [])

     

    return (
        <>
            <div className="mainBox ">
                <div className='mainBox-track'>


                    {data.map((each) => {
                        // console.log(each.item);
                        return (
                            <div className='logoBox' key={each.id}>

                                <img src={each.image} alt='image' />

                                <div className='text-center mt-1 mb-1'>
                                    <h1>{each.name}</h1>
                                    <span className='price'> Rank {each.market_cap_rank }</span><h2>{each.high_24h} high</h2>
                                </div>

                            </div>

                        )
                    })}

                </div>
            </div>

        </>

    )
}

export default HeroCard


