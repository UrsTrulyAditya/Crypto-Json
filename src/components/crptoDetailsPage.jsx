import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { ThreeCircles, ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import Header from './header';

const apiStatusConstant = {
    initial: 'initial',
    inProgress: 'inProgress',
    success: 'success',
    failure: 'failure',
}

const CryptoDetailPage = () => {
    const { id } = useParams();
    const [coins, setcoin] = useState({});
    const [img, setImage] = useState("");

    const [apiStatus, setApiStatus] = React.useState(apiStatusConstant.initial);



    useEffect(() => {
        const getCoins = () => {
            setApiStatus(apiStatusConstant.inProgress);
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true`).then((res) => {
                setcoin(res.data);
                setImage(res.data.image.large);
                setApiStatus(apiStatusConstant.success)



            }).catch((err) => console.log(err));
            setApiStatus(apiStatusConstant.failure)


        }

        getCoins();
    }, [])

    const inProgress = () => {
        return (
            <ThreeCircles
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />
        )
    }

    const failureView=()=>{
        return (
            <div className='container'>
                <h1 className='text-center'>Something went wrong</h1>
            </div>
        )
    }
    const successView=()=>{
        return (
            <>
            <Header/>
            < div className='container pb-5 mt-5 mb-5'>
            <div className='row'>
                <div className='col-4 text-white text-left'>
                    <div>
                        <img src={img} className="imgDetail" alt="logo" />

                    </div>

                    <div>
                        <p>Coin Info</p>
                        <h1>{coins.name}</h1>
                        <p> {coins.name} is the first successful internet money based on peer-to-peer technology,
                            whereby no central bank or authority is involved in the transaction and
                            production of the {coins.name} currency.
                            The source code is available publicly as an open source project,
                            anybody can look at it and be part of the developmental process.</p>
                        <p>Rank : <span className='text-info'>{coins.market_cap_rank}</span></p>
                        <span className='text-info'>{coins.price_change_24h}</span>
                        <span>{coins.current_price}</span>

                    </div>
                </div>
                <div className='col-8'>

                </div>

            </div>
        </div>
        </>

        )
    }

    const renderoutput=()=>{
        switch (apiStatus) {
            case apiStatusConstant.success:
                return successView();
            case apiStatusConstant.inProgress:
                return inProgress();        
            case apiStatusConstant.inProgress:
                return failureView();        
        
            default:
                return null;
        }
    }

    return ( 
        renderoutput()
    )
}

export default CryptoDetailPage