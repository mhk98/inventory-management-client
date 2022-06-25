import React, { useEffect, useState } from 'react';
import Computer from './Computer';

const Computers = () => {

    const [computers, setComputers] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/computer')
        .then(res=> res.json())
        .then(data=>setComputers(data))
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
            
            const remaining= computers.filter(computer => computer._id !== id)
            setComputers(remaining)
            
          })
        }
      }
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-8'>
            {
                            computers.map(computer => <Computer key={computer._id} computer={computer} handleDelete={handleDelete}></Computer>)
            }
        </div>
    );
};

export default Computers;