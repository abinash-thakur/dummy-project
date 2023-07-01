import { React, useEffect } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { apiCallingList, apiCallingDetails } from '../redux/action/index';
import { connect } from 'react-redux';
import axios from 'axios';

function Movielist({ movieData, loadMovieList, movieDetails }) {
    let index = 0;
    const navigation = useNavigate();
    const apiUrl = "http://localhost:5000/api/getList";

    const getData = async () => {
        const data = await axios.get(apiUrl);
        if (data.status === 200) {
            loadMovieList(data.data.payload);
        }
    }

    const handelClick = async (e) => {
        e.preventDefault();
        if (movieData.allItems[e.target.name]?.details) {
            navigation('/Details', {state : movieData.allItems[e.target.name].details});
        }
        else {
            const apiUrl = `http://localhost:5000/api/details/getDetails?moviId=${e.target.id}`;

            const details = await axios.get(apiUrl);
            if (details.status === 200) {
                movieDetails(details.data.payload);
                navigation('/Details', {state : movieData.allItems[e.target.name].details});
            }
        }

    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <Container>
            <ListGroup>
                {
                    movieData.allItems?.map(ele => {
                        return (
                            <ListGroup.Item className='d-flex justify-content-between'>{ele.name} <Button className='btn-sm' id={ele._id} name={index++} onClick={handelClick}>Get Details</Button></ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        movieData : state.counterReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadMovieList: (data) => dispatch(apiCallingList(data)),
        movieDetails: (data) => dispatch(apiCallingDetails(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);