import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/navigation-bar.png';
import { useState } from 'react';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <nav className="navbar">
            <div className='navbar-container'>
                <div className='logo-container' onMouseLeave={handleMouseLeave}>
                    <img 
                        src={logo} 
                        alt='logo' 
                        className='navbar-icon' 
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                    {showDropdown && (
                        <div className='dropdown-menu'>
                            <Link to='/' className='dropdown-item'>Home</Link>
                            <Link to='/about' className='dropdown-item'>About</Link>
                            <Link to='/projects' className='dropdown-item'>Projects</Link>
                            <Link to='/contact' className='dropdown-item'>Contact</Link>
                        </div>
                    )}
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
