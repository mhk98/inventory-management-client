import React, { useEffect, useState } from 'react';
import Cloth from './Cloth';

const Clothes = () => {

    const [clothes, setClothes] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/cloth')
        .then(res=> res.json())
        .then(data=>setClothes(data))
    },[])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you want to delete')
          
        if(proceed){
          console.log('Deleting user id', id)
  
          const url= `http://localhost:5000/computer/${id}`
          fetch(url,{
            method: 'DELETE'
          } )
  
          .then(res => res.json)
          .then(data =>{
            console.log('Delete Data', data)
            
            const remaining= clothes.filter(cloth => cloth._id !== id)
            setClothes(remaining)
            
          })
        }
      }
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-8 gap-4'>
            {
                            clothes.map(cloth => <Cloth key={cloth._id} cloth={cloth} handleDelete={handleDelete}></Cloth>)
            }
        </div>
    );
};

export default Clothes;