import { useState } from 'react';
import useFetch from '../hooks/useFetch.js';
import CharacterCardPage from './CharacterCardPage.js';

const Characters = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')

    const {data: characterData, isPending, error} = useFetch(url);

    return (
        <section id="characters">
            <div id="card-table">
                { characterData && <CharacterCardPage charData={ characterData.results }/> }
            </div>
        </section>
    );
}
 
export default Characters;