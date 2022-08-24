import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import './table.css'
import axios from 'axios';
import Header from './header';


class View extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getSavedData();
    }


    getSavedData = async () => {
 
        axios.get("https://json-server5.herokuapp.com/savedData").then((res)=>{
            // console.log(res.data);
            this.setState({data:res.data})
        }).catch(err=>console.log(err));
         
    }
     deleted=(id)=>{
        axios.delete(`https://json-server5.herokuapp.com/savedData/${id}`).then(()=>{
            this.getSavedData()
        }).catch(err=>console.log(err));

        // location.reload()
     }
    render() {
        const { data } = this.state;


        return (
             
            <div>
                
                <div className="TableContainer" component={Paper}>
                    <div className="heading">
                        SAVED CRYPTO

                    </div>
                    <Table className="Table" aria-label="simple table" stickyHeader>

                        <TableBody>
                            {data.map((row) => (
                                <TableRow className="row" key={row.id}>
                                    <TableCell className="text-light" align="center" component="th" scope="row">
                                       <img className='logo' src={row.image} alt="logo" />
                                    </TableCell>
                                    <TableCell className="text-light" align="center" component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center" className="text-light">
                                        <button className="symbol-btn">
                                            {row.symbol}
                                        </button>
                                    </TableCell>
                                    <TableCell className="text-light" align="center">${row.market_cap}</TableCell>

                                    <TableCell align="center" className="text-light">${row.current_price.toFixed(2)}
                                        <p>USD</p>
                                    </TableCell>
                                    <TableCell>

                                        <button className="view-btn delBtn" onClick={()=>this.deleted(row.id)}>DELETE</button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="heading">
                        <Link to="/"><button className="view-btn backBtn">BACK</button></Link>

                    </div>
                </div>


            </div>
        )

    }
}

export default View