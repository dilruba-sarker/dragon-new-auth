
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
const {createNewUser , setUser}=useContext(AuthContext)
const [error,setError]=useState({})
const handleSubmit=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    if(name.length<5){
      setError({...error , name:"name will be more than 5"})
      return
    }
    const email=e.target.email.value;
    const photo=e.target.photo.value;
    const password=e.target.password.value;
    console.log(name,email,photo,password);
    createNewUser(email,password)
    .then(result=>{
        const user=result.user
        setUser(user)
        console.log("user register", result.user);
    })
    .catch(err=>{
        console.log(err.message);

    })

}

    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex flex-col">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register Now!</h1>
 
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleSubmit} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name:</span>
      </label>
     
      <input type="text"
      name='name'
       placeholder="name"
        className="input input-bordered" required />
    </div>

    {error.name&& <div className='text-red-500 text-xl'>{error.name} </div>}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo Url</span>
      </label>
      <input type="text"
      name='photo'
       placeholder="photo url"
        className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email"
      name='email'
       placeholder="email" 
       className="input input-bordered" 
       required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password"
      name='password'
       placeholder="password"
        className="input input-bordered"
         required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
    <div>Do not have a account? 
        <Link className='text-green-500' to="/auth/login">Log in</Link>
    </div>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default Register;