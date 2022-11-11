import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../firebase.init';

const Navbar = () => {
    const auth =getAuth((app))
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
      };
    return (
        <div>
        <div className="navbar bg-lime-300">
         <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact     dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link className='font-bold' to='/'>Home</Link></li>
        <li><Link className='font-bold' to='/register'>Register</Link></li>
         <li> {
        (user)?<Link className='font-bold' to="/" onClick={handleSignOut}>Logout</Link>:
        <Link className='font-bold' to='/login'>Login</Link>
        }</li>
        </ul>
        </div>
         <a className="w-4/12 lg:w-48"><img src="https://awto.ai/images/logo.png"/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link className='font-bold' to='/'>Home</Link></li>
      <li><Link className='font-bold' to='/register'>Register</Link></li>
      <li> 
        {
        (user)?<Link className='font-bold' to='/' onClick={handleSignOut}>Logout</Link>:
        <Link className='font-bold' to='/login'>Login</Link>
        }
      </li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;