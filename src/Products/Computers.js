import React, { useEffect, useState } from 'react';
import Computer from './Computer';

const Computers = () => {

    const [computers, setComputers] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/computer')
        .then(res=> res.json())
        .then(data=>setComputers(data))
    },[])
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-8'>
            {
                            computers.map(computer => <Computer computer={computer}></Computer>)
            }
        </div>
    );
};

export default Computers;