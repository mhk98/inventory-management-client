import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams } from 'react-router-dom';

const UpdateComputer = () => {
    const {id} = useParams()
    const [computerProduct, setComputerProduct] = useState({})

    useEffect( () =>{
        const url = `http://localhost:5000/computer/${id}`
        fetch(url)
        .then(data => data.json())
        .then(data =>setComputerProduct(data))
    },[])
    return (
        <div>
            <h2>Updating Product Info: {computerProduct.price}</h2>
        </div>
    );
};

export default UpdateComputer;