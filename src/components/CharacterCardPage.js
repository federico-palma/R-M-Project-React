const CharacterCardPage = (charData) => {
    // For some reason data comes as a JSobject with array as only property, here's destructered into an array.
    const { charData: dataArray } = charData

    return (
        <div className="character-card-page">
            { dataArray.map((singleCharData) => (
                <div className="char-card" key={ singleCharData.id }>
                    <img src={singleCharData.image} alt="" className="char-img"/>
                    <h2 className="char-name">{ singleCharData.name }</h2>
                    <p className="char-id">{ singleCharData.id }</p>
                </div>
                ))}
        </div>
    );
}

export default CharacterCardPage;
