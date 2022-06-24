import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
const Login = () => {

    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate()
    const location =  useLocation()

    // let from = location.state?.from?.pathname || "/";

    const from = location.state?.from?.pathname || "/";
    
    
        if(user){
            navigate(from, { replace: true });
        }
      

      

      if(loading){
          return <Loading></Loading>
      }

      if(error){
          signInError = <p>{error.message}</p>
      } 

    const onSubmit = data =>{
        signInWithEmailAndPassword(data.email, data.password)
    } 
    return (
        <div className='flex h-screen justify-center items-center'>
    <div  className="card w-96 bg-base-100 shadow-xl">
        <div  className="card-body">
            <h2  className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                      value: 8,
                      message: 'Please enter 8 characters or longer'
                    }
                  })}
                />
                <label  className="label">
            {errors.password?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                    

                </label>
            </div>
            <p className='text-red-500'>{signInError}</p>
      <input className='w-full max-w-xs btn' type="submit" value='Login' />
    </form>
    <p>New to Inventory Management System? <Link className='text-secondary' to='/signup'>Create New Account</Link> </p>
            
        </div>
    </div>
</div>
    );
};

export default Login;