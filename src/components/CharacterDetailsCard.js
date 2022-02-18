


const CharacterDetailsCard = (character) => {




    return (
        <div id="char-details-card">
            <button id="close-btn">X</button>
                <p id="char-id-detail"></p>
                <img id="char-img-detail" src="" alt=""></img>
                <ul id="char-detail-list">
                    <li className="char-detail-items">Name: </li>
                    <li className="char-detail-items">Gender: </li>
                    <li className="char-detail-items">Species: </li>
                    <li className="char-detail-items">Origin: </li>
                    <li className="char-detail-items">Location: </li>
                    <li className="char-detail-items">Status: </li>
                </ul>
        </div>
    );
};
 
export default CharacterDetailsCard;