import useFetchSingle from '../hooks/useFetchSingle.js';

const CharacterDetailsCard = (characterID) => {

    const { charData, loading, error, hasMore } = useFetchSingle('character/', 1);
    charData && console.log(charData)
    



    return (
        <div id="char-details-card">
            <button id="close-btn">X</button>
            {charData && <div id="char-detail-info-container">
                <p id="char-id-detail"></p>
                <img id="char-img-detail" src="" alt=""></img>
                <ul id="char-detail-list">
                    <li className="char-detail-items">Name: { charData.data.name }</li>
                    <li className="char-detail-items">Gender: { charData.data.gender }</li>
                    <li className="char-detail-items">Species: { charData.data.species }</li>
                    <li className="char-detail-items">Origin: { charData.data.origin }</li>
                    <li className="char-detail-items">Location: { charData.data.origin }</li>
                    <li className="char-detail-items">Status: { charData.data.status }</li>
                </ul>
            </div>}
            { charData && console.log(charData) }
        </div>
    );
};
 
export default CharacterDetailsCard;