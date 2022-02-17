import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="home">
            <div className="home-cards-container">
                <Link to='/characters'>
                    <div className="home-cards" id="char-home-card"></div>
                    <h2 className="home-card-text">Characters</h2>
                </Link>
            </div>
            <div className="home-cards-container">
                <Link to='/locations'>
                    <div className="home-cards" id="location-home-card"></div>
                    <h2 className="home-card-text">Locations</h2>
                </Link>
            </div>
            <div className="home-cards-container">
                <div className="home-cards" id="episode-home-card"></div>
                <h2 className="home-card-text">Episodes</h2>
            </div>
        </section>
    );
}
 
export default Home;