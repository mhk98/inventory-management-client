import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      
      const Navigate= useNavigate()

      let signInError;

      if(loading){
          return <Loading></Loading>
      }

      if(error){
          signInError = <p>{error?.message}</p>
      }
    if(user){

        Navigate('/home')
    }

    const onSubmit = async data =>{
       await createUserWithEmailAndPassword(data.email, data.password)
    } 
    return (
        <div className='flex h-screen justify-center items-center'>
    <div  className="card w-96 bg-base-100 shadow-xl">
        <div  className="card-body">
            <h2  className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">Name</span>

                </label>
                <input type="text" 
                placeholder="Your Name" 
                 className="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    },
                
                    minLength: {
                      value: '',
                      message: 'Provide a valid Name'
                    }
                  })}
                />
                <label  className="label">
            {errors.name?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.name.message}</span>}
            {errors.name?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.name.message}</span>}
                    

                </label>
            </div>
            <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">Email</span>

                </label>
                <input type="email" 
                placeholder="Your Email" 
                 className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                    }
                  })}
                />
                <label  className="label">
            {errors.email?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
                    

                </label>
            </div>

            <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">Password</span>

                </label>
                <input type="text" 
                placeholder="Your Password" 
                 className="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required'
                    },
                
                    minLength: {
                      value: 6,
                      message: 'Please enter 6 characters or longer'
                    }
                  })}
                />
                <label  className="label">
            {errors.password?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                    

                </label>
            </div>
            <p className='text-red-500'>{signInError}</p>
      <input className='w-full max-w-xs btn' type="submit" value='Sign Up' />
    </form>
    <p>Already have an account? <Link className='text-secondary' to='/login'>Login</Link> </p>
            
        </div>
    </div>
</div>
    );
};

export default SignUp;