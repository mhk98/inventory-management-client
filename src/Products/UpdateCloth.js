import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateCloth = () => {
    const {id} = useParams()
    const [clothProduct, setClothProduct] = useState({})

    useEffect( () =>{
        const url = `http://localhost:5000/cloth/${id}`
        fetch(url)
        .then(data => data.json())
        .then(data =>setClothProduct(data))
    },[])

    const handleAdd = (event) =>{
        event.preventDefault()

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const img = event.target.img.value;

        const clothProduct= {name, price, quantity, img}

        fetch(`http://localhost:5000/cloth/${id}`,{

            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },

            body: JSON.stringify(clothProduct)

        })

        .then(res =>res.json())
        .then(data =>{
            toast('Product Added Successfully')
            event.target.reset()
        })
    }
    return (
        <div>
            <h2>Update Cloth: {clothProduct.name}</h2>
            <form onSubmit={handleAdd} className='flex flex-col items-center max-w-full'>
                <input className='border border-2 rounded p-2 mt-2' type="text" name="name" placeholder='Name' required />
                <input className='border border-2 rounded p-2 mt-2' type="text" name="price" placeholder='Price' required />
                <input className='border border-2 rounded p-2 mt-2' type="text" name="quantity" placeholder='Quantity' required />
                <input className='border border-2 rounded p-2 mt-2' type="text" name="img" placeholder='Photo URL' required />
                <input className='btn mt-2' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateCloth;