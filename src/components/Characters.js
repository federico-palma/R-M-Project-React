import { useState, useRef, useCallback } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch.js';
import CharacterDetailsCard from './CharacterDetailsCard.js';
import MainLoading from './MainLoading.js';

const Characters = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const { data, loading, error, hasMore } = useAxiosFetch('character/', pageNumber);

    const observer = useRef()
    const lastCharCard = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
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
            <div id="character-cards">
                { data && data.map((singleCharData, index) => {
                    if (data.length === index + 1) {
                        return (
                        <div className="char-card" key={ singleCharData.id } ref={ lastCharCard } onClick="">
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
            <CharacterDetailsCard />
            { loading && hasMore && <MainLoading/>}
        </section>
    );
}
 
export default Characters;