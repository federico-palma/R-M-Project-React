import useFetch from '../hooks/useFetch.js';
import CharacterCard from './CharacterCard.js';

function getCharCard(singleCharacterData) {
    let charCard = <CharacterCard singleCharacterData={ singleCharacterData }/>
    return charCard
}

function getCharCardList(fullPageCharacterData) {
    let charCardList = []

    for (let i = 0; i < fullPageCharacterData.results.length; i++) {
        const singleCharacterData = fullPageCharacterData.results[i];
        const populatedCharCard = getCharCard(singleCharacterData);
        charCardList.push(populatedCharCard);
    }

    return charCardList;
}

const Characters = () => {
    const {data: characterData, isPending, error} = useFetch('https://rickandmortyapi.com/api/character');

    return (
        <section id="characters">
            <div id="card-table">
                { characterData && getCharCardList(characterData) }
            </div>
        </section>
    );
}
 
export default Characters;