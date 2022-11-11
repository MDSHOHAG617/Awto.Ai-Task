import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from '../firebase.init'
import Loading from './Loading';
const Register = () => {

    const auth=getAuth(app);
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
    //   <div>
    //     <p className='text-red-400'>Error: {error.message}</p>
    //   </div>
    <div className="alert alert-error shadow-lg w-10/12 mx-auto mt-8">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <p className=''>Error: {error.message}</p>
  </div>
</div>
    );
  }
  if (loading) {
    return <Loading></Loading>
    // return <p>Loading...</p>;
  }
  if (user) {
    return (
    
  <div className="alert alert-success shadow-lg w-10/ 12       mx-auto mt-8 ">
      <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <h1 className=''>User successfully registered</h1>
   
     </div>
  </div>
      
    );
  }
    return (
        <div className=" w-8/12 bg-gradient-to-r from-pink-300 to-blue-300 rounded  mx-auto mt-8">
            <h1 className='text-2xl font-bold py-4 pt-8'>Please Register</h1>
      <form onSubmit={() => createUserWithEmailAndPassword(email, password)}>
      <input className="input input-bordered input-info     lg:w-full sm:w-10/12 max-w-xs my-3 "
      required
      name='Email'
      placeholder='Type your email'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br></br>
      <input
      className='input input-bordered input-info lg:w-full sm:w-10/12 max-w-xs my-3 '
      type="text" 
      name='mobile'
      required
      placeholder='type your mobile'/>
      <br></br>
      <textarea
      className='textarea textarea-accent lg:w-full sm:w-10/12 max-w-xs my-3'
      required
      type="text" 
      name='contact'
      placeholder='type your contact'/>
        <br></br>
      <input className="input input-bordered input-info lg:w-full sm:w-10/12 max-w-xs mb-3"
      placeholder='Enter password'
      required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button className='btn glass btn-md btn-primary my-3 text-black'
      type='submit' >
        Register
      </button>
      </form>
    </div>
    );
};

export default Register;