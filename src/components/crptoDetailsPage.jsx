import { color } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const CryptoDetailPage = () => {
    const { id } = useParams();
    const [coins, setcoin] = useState({});


    // console.log(coins.description,coins.image.large)
    useEffect(() => {
        const getCoins = () => {
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true`).then((res) => {
                setcoin(res.data)
    
            }).catch((err) => console.log(err));
        }

        getCoins();
    }, [])

    // const image=coins.image.large;
    //  const desc=coins.description.en.split(". ")[0];
    //  console.log(image)
    return (
        < div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-4 text-white text-left'>
                    <img src="{image}"  alt="logo" />
                    <p>Coin Info</p>
                    <h1>{coins.name}</h1>
                    <div>
                        <p>desc</p>
                        <p>Rank : <span className='text-info'>{coins.market_cap_rank}</span></p>
                        <span className='text-info'>{coins.price_change_24h}</span>
                        <span>{coins.current_price}</span>

                    </div>
                </div>
                <div className='col-8'>

                </div>

            </div>
        </div>
    )
}

export default CryptoDetailPage