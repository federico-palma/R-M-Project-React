import { useState } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch.js';
import MainLoading from './MainLoading.js';

const CharacterDetails = () => {

    const { data, loading, error, hasMore } = useAxiosFetch('character/', pageNumber);



    return (
        <section id='character-details'>
            { data && <div id="character-details-container">
                <h1 id="character-name">{{ characterData.name }}</h1>
                <img :src="characterData.image" alt="">
                <ul id="character-details-list">
                    <li class="character-details-item" :v-if="characterData.status">Status: {{ characterData.status }}</li>
                    <li class="character-details-item" :v-if="characterData.gender">Gender: {{ characterData.gender }}</li>
                    <li class="character-details-item" :v-if="characterData.species">Species: {{ characterData.species }}</li>
                    <li class="character-details-item" :v-if="characterData.origin.name">Origin: {{ characterData.origin.name }}</li>
                </ul>
            </div> }
            { loading && <MainLoading/>}
        </section>
    );
}
 
export default CharacterDetails;