import * as React from 'react';
import { Audio, Circles, ThreeCircles } from 'react-loader-spinner'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './table.css';
import axios from "axios";
import { CircularProgress } from '@mui/material';

const apiStatusConstant = {
    initial: 'initial',
    inProgress: 'inProgress',
    success: 'success',
    failure: 'failure',
}

const DynamicTable = () => {
    const [apiStatus, setApiStatus] = React.useState(apiStatusConstant.initial)
    const [data, setData] = React.useState([]);
    const [saveddata, setSavedData] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        setApiStatus(apiStatusConstant.inProgress);
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((res) => {
                setData(res.data);
                setSavedData(res.data.slice(0, 10))
                setApiStatus(apiStatusConstant.success)
            })
            .catch((error) => {
                console.log(error);
                setApiStatus(apiStatusConstant.failure)
            });



    }, []);

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const filteredData = data.filter(each => each.name.toLowerCase().includes(search.toLowerCase()))

    const selected = (name, symbol, market_cap, current_price, image) => {
        // console.log("clicked")
        axios.post("https://json-server5.herokuapp.com/savedData", { name, symbol, market_cap, current_price, image }).then(() => {
            // console.log("done")
        }).catch((err) => console.log(err));

        alert("crypto has been saved");


    }

    const failureView=()=>{
        return (
            <div className='container'>
                <h1 className='text-center'>Something went wrong</h1>
            </div>
        )
    }
    const inProgress = () => {
        return (
            <div className='text-center col-12'>

            <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
            />
            </div>
            
        )
    }
    const succesView = () => {
        return (
            <>

                <div className=" TableContainer container text-center" component={Paper}>
                    <div className="searchBox">
                        <p className='text-light'>Stock Details Table</p>

                        <div>

                            <input type="text" value={search} placeholder='Search by Currency' onChange={handleChange} />
                        </div>
                        <Link to="/view">
                            <Button className='Button text-light'>SAVED CRYPTO</Button>
                        </Link>
                    </div>
                    <Table className="Table" aria-label="simple table" stickyHeader>
                        <thead>
                            <TableRow sx={{ background: "gold", color: "black" }}>
                                <TableCell align="center" className="tablehead"> Crypto  </TableCell>
                                <TableCell align="center"> NAME</TableCell>
                                <TableCell align="center">SYMBOL</TableCell>
                                <TableCell align="center">MARKET CAP</TableCell>


                                <TableCell align="center">CURRENT PRICE</TableCell>
                                <TableCell align="center">   </TableCell>

                            </TableRow>
                        </thead>
                        <TableBody>
                            {filteredData.slice(0, 15).map((row) => (

                                <TableRow className="row-each" key={row.id} >
                                    <TableCell className="cell text-light" onClick={() => navigate(`/crypto/${row.id}`)} align="center" component="th" scope="row">
                                        <img className='logo' src={row.image} />
                                    </TableCell>
                                    <TableCell className="cell text-light" align="center" component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center" className="cell text-light">
                                        <a className="symbol-btn" >
                                            {row.symbol}
                                        </a>
                                    </TableCell>
                                    <TableCell align="center" className="cell text-light">${row.market_cap}</TableCell>
                                    <TableCell align="center" className="cell text-light">${row.current_price.toFixed(2)}
                                        <p>USD</p>
                                    </TableCell>

                                    <TableCell>


                                        <button onClick={() => selected(row.name, row.symbol, row.market_cap, row.current_price, row.image)}
                                            className="view-btn">SAVE</button>
                                    </TableCell>



                                </TableRow>

                            ))}
                        </TableBody>

                    </Table>


                </div>
            </>

        )
    }

    const renderTable=()=>{
        switch (apiStatus) {
            case apiStatusConstant.success:
                return succesView();
            case apiStatusConstant.inProgress:
                return inProgress();
            case apiStatusConstant.failure:
                return failureView();
            
        
            default:
                return null;
        }
    }
    return (
        renderTable()
    )
}
export default DynamicTable;