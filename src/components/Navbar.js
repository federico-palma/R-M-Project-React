import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <img id="logo" src={require("../images/RickAndMortyLogo.png")} alt="Rick and Morty logo"/>
            </Link>
            <div className="navbar-links">
                <Link to='/characters'>
                    <p id="nav-link-character">Characters</p>
                </Link>
                <p id="nav-link-location">Locations</p>
                <p id="nav-link-episode">Episodes</p>
            </div>
        </nav>
    );
}
 
export default Navbar;