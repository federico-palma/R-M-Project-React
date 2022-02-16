const CharacterCards = (charData, isLastCard) => {
    // For some reason data comes as a JSobject with array as only property, here's destructered into an array.
    const { charData: dataArray } = charData

    function setImgGenderColor(charGender) {
        switch (charGender) {
            case 'Male':
                return '0px 0px 5px 3px #1512da'
                break;
            case 'Female':
                return '0px 0px 5px 3px #da122d'
                break;
            case 'Genderless':
                return '0px 0px 5px 3px #ee7b22'
                break;
            case 'unknown':
                return '0px 0px 5px 3px #4ecf27'
                break;
            default:
                return '0px 0px 5px 3px #f60fe3'
                break;
        }
    }

    return (
        <div className="character-cards">
            { dataArray.map((singleCharData) => (
                <div className="char-card" key={ singleCharData.id }>
                    <img src={singleCharData.image} alt="" className="char-img" style={{boxShadow: setImgGenderColor(singleCharData.gender)}}/>
                    <h2 className="char-name">{ singleCharData.name }</h2>
                    <p className="char-id">{ singleCharData.id }</p>
                </div>
                ))}
        </div>
    );
}

export default CharacterCards;
