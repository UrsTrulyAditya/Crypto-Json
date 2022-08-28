import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { ThreeCircles, ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2';
import Chart from './charts';
import { CircularProgress } from '@mui/material';

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

    const progressView = () => {
        return (
            <div className='text-center'>

                <CircularProgress
                    style={{ color: "rgb(53, 162, 235)" }}
                    size={250}
                    thickness={1}
                />
            </div>
        )
    }

    const failureView = () => {
        return (
            <div className='container'>
                <div className='text-center'>

                    <CircularProgress
                        style={{ color: "rgb(53, 162, 235)" }}
                        size={250}
                        thickness={1}
                    />
                </div>
            </div>
        )
    }
    const successView = () => {
        return (
            <>

                <div className='container pb-5 mt-5 mb-5'>
                    <div className='row'>
                        <div className='col-12 text-white text-left d-flex flex-column'>
                            <div>
                                <img src={img} className="imgDetail" alt="logo" />

                            </div>

                            <div id="details">
                                <p>Coin Info</p>
                                <h1 className='text-info'>{coins.name}</h1>

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
                        <div className='col-12 d-flex flex-column align-items-center'>

                            <Chart />
                        </div>

                    </div>
                </div>


            </>

        )
    }

    const renderoutput = () => {
        switch (apiStatus) {
            case apiStatusConstant.success:
                return successView();
            case apiStatusConstant.inProgress:
                return progressView();
            case apiStatusConstant.failure:
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