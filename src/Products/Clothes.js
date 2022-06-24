import React, { useEffect, useState } from 'react';
import Cloth from './Cloth';

const Clothes = () => {

    const [clothes, setClothes] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/cloth')
        .then(res=> res.json())
        .then(data=>setClothes(data))
    },[])
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-8 gap-4'>
            {
                            clothes.map(cloth => <Cloth key={cloth._id} cloth={cloth}></Cloth>)
            }
        </div>
    );
};

export default Clothes;