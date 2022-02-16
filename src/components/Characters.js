import { useEffect, useState, useRef, useCallback } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch.js';
// import CharacterCards from './CharacterCards.js';


const Characters = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')

    const { data, loading, error, hasMore, nextPageUrl } = useAxiosFetch('character/', pageNumber);

    const observer = useRef()
    const lastCharCard = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                console.log(nextPageUrl)
                console.log('last card visible')
                setPageNumber(prevPageNumber => prevPageNumber + 1)
                console.log(nextPageUrl)
                
                
            }
        })
        if (node) observer.current.observe(node)

        console.log(node)
    }, [loading]);

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
        <section id="characters">
            <div className="character-cards">
                { data.map((singleCharData, index) => {
                    if (data.length === index + 1) {
                        return (
                        <div className="char-card" key={ singleCharData.id } ref={ lastCharCard }>
                            <img src={singleCharData.image} alt="" className="char-img" style={{boxShadow: setImgGenderColor(singleCharData.gender)}}/>
                            <h2 className="char-name">{ singleCharData.name }</h2>
                            <p className="char-id">{ singleCharData.id }</p>
                        </div>
                        )
                    } else {
                        return (
                        <div className="char-card" key={ singleCharData.id }>
                            <img src={singleCharData.image} alt="" className="char-img" style={{boxShadow: setImgGenderColor(singleCharData.gender)}}/>
                            <h2 className="char-name">{ singleCharData.name }</h2>
                            <p className="char-id">{ singleCharData.id }</p>
                        </div>
                        )
                    }
                })}
            </div>
        </section>
    );
}
 
export default Characters;