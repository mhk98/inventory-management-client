import React from 'react';
import { toast } from 'react-toastify';

const AddCloth = () => {

    const handleSubmit = event =>{
        event.preventDefault();
  
        const product ={
            img: event.target.img.value,
            name: event.target.name.value,
            description: event.target.description.value,
            moquantity: event.target.moquantity.value,
            aquantity: event.target.aquantity.value,
            price: event.target.price.value,
        }

        const url= `http://localhost:5000/cloth`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        .then(res => res.json())
        .then(data =>{
            if(data){
                toast('Thank you for successfully add a product')
                event.target.reset();
            }
        })

    }
    return (
<div className='flex justify-center items-center w-full'>
              <form onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold'>Product Information</h2>
            <div class="form-control w-full max-w-s">
                    <label class="label">
                        <span class="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='img' class="input input-bordered w-full max-w-xs" />
                    
            </div>
            <div class="form-control w-full max-w-s">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" name='name' class="input input-bordered w-full max-w-xs" />
                    
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input type="text" name='description' class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="text" name='moquantity' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Available Quanity</span>
                    </label>
                    <input type="text" name='aquantity' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price Per Unit</span>
                    </label>
                    <input type="text" name='price' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>

        <input className='btn bg-primary mt-4 border-0' type="submit" value="Submit" class="btn" />
           


          </form>

            </div>
    );
};

export default AddCloth; 