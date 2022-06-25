import React from 'react';
import { Link } from 'react-router-dom';

const Cloth = ({cloth, handleDelete}) => {
    const {_id, name, price, quantity, img} = cloth;
    return (
<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  <button onClick={() => handleDelete(_id)} className='absolute top-0 ml-64 text-2xl'>X</button>
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>Price: {price}</p>
    <p>Quantity: {quantity}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
      <Link to={`/updateCloth/${_id}`} class="btn btn-primary">Update</Link>
    </div>
  </div>
</div>
    );
};

export default Cloth;