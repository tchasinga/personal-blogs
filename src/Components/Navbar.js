import {Link } from 'react-router-dom' 
const Navbarlinks = () => {
    return (
        <nav className="navbar">
            <h1>Personal blogs</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Create">New blogs</Link>
            <Link to="/About">About</Link>
        </div>
        </nav>
    );
}
 
export default Navbarlinks;