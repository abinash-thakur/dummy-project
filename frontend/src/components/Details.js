import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';

export default function Details() {

    const location   = useLocation();
    const navigation = useNavigate();

    const data       = location.state;
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{height : "100vh"}}>
            <div style={{width : "20rem"}}>
                <Table style={{border : "2px solid black"}}>
                    <tbody>
                        <tr>
                            <td>Movie Name</td>
                            <td>:</td>
                            <td>{data.moviName}</td>
                        </tr>
                        <tr>
                            <td>Actor</td>
                            <td>:</td>
                            <td>{data.Actor}</td>
                        </tr>
                        <tr>
                            <td>Director</td>
                            <td>:</td>
                            <td>{data.Director}</td>
                        </tr>
                        <tr>
                            <td>Writer</td>
                            <td>:</td>
                            <td>{data.Writer}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Button className='btn-sm' onClick={()=>{navigation(-1)}}>goBack</Button>
        </Container>
    )
}
