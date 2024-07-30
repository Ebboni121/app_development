import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = function(){
    return(
<>
        <nav className='navbar'>
            <div>
                <Link to="">Home</Link>
            </div>
            <div className='btngroup'>
                <button><Link to="https://www.nbcolympics.com/"> Olympic Coverage</Link></button>
                <button><Link to="/about">Sports </Link></button>
                <button><Link to="/contact"> Contact</Link></button>
            </div>
            </nav>
          
            </>
    )}

export default Navbar;