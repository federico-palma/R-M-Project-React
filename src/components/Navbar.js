const Navbar = () => {
    return (
        <nav className="navbar">
            <img id="logo" src={require("../images/RickAndMortyLogo.png")} alt="Rick and Morty logo"/>
            <div className="navbar-links">
                <p id="nav-link-character">Characters</p>
                <p id="nav-link-location">Locations</p>
                <p id="nav-link-episode">Epsiodes</p>
            </div>
        </nav>
    );
}
 
export default Navbar;