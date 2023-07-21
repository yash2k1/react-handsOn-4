import React from 'react'
import { Link } from 'react-router-dom';
import './NavbarStyle.css'
// import Home from './Home';
// import Students from './Students';
// import Contact from './Contact';
const Navbar=()=>{
   return(
<>
  <div className="nav">
    <Link to='/'  className='nonActiveNav' >Home</Link>
    <Link to='/Students' className='nonActiveNav' >Student</Link>
    <Link to='/Contact' className='nonActiveNav' >Contact</Link>
  </div>
</>
   ); 
}
export default Navbar;