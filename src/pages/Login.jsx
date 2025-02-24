import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const location=useLocation()
  const navigate=useNavigate()
  console.log("from login", location);
  const [error,setError]=useState({})
const {LoginUser,setUser}=useContext(AuthContext)
const handleLogin=(e)=>{
    e.preventDefault()

    const email=e.target.email.value;

    const password=e.target.password.value;
    console.log(email,password);
    LoginUser(email,password)
    .then(result=>{
        const user= result.user
        setUser(user)
        navigate(location?.state? location.state:"/")
    }).catch(err=>{
        console.log(err.message);
        setError({ ...error,login:err.message })
    })
}

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email'
          placeholder="email"
           className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          name='password'
          placeholder="password" className="input input-bordered" required />

          {error.login&& 
          <label className="label text-red-600">
      {  error.login}
          
        </label>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>Do not have a account? 
            <Link className='text-red-500' to="/auth/register">Register</Link>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;