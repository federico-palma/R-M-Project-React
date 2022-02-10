const CharacterCard = (singleCharData) => {
    return (
        <div className="char-card" key={ singleCharData.id }>
            <img src={singleCharData.image} alt="" className="char-img"/>
            <h2 className="char-name">{ singleCharData.name }</h2>
            <p className="char-id">{ singleCharData.id }</p>
        </div>
    );
}

export default CharacterCard;
