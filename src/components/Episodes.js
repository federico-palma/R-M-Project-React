import { useState, useRef, useCallback } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch.js';
import MainLoading from './MainLoading.js';

const Episodes = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const { data, loading, error, hasMore } = useAxiosFetch('episode/', pageNumber);

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

    function setBackgroundColor(season) {
        switch (season.slice(0, 3)) {
            case 'S01':
                return '#7a78dd'
                break;
            case 'S02':
                return '#d35868'
                break;
            case 'S03':
                return '#e98c46'
                break;
            case 'S04':
                return '#85c870'
                break;
            case 'S05':
                return '#eb63df'
                break;
            case 'S06':
                return '#eeec7f'
                break;
            case 'S07':
                return '#82e4cf'
                break;
            default:
                return ''
                break;
        }
    }

    return (
        <section id="episodes">
            <div id="episode-cards">
                { data && data.map((singleEpisodeData, index) => {
                    if (data.length === index + 1) {
                        return (
                        <div className="episode-card" key={ singleEpisodeData.id } style={ {backgroundColor: setBackgroundColor(singleEpisodeData.episode) }} ref={ lastCharCard }>
                            <p className="episode-id">{ singleEpisodeData.id }</p>
                            <h2 className="episode-name">{ singleEpisodeData.name }</h2>
                            <p className="episode-number">Season: { singleEpisodeData.episode.slice(1, 3) } | Episode: { singleEpisodeData.episode.slice(4) }</p>
                            <p className="episode-date">{ singleEpisodeData.air_date }</p>
                            <button className="episode-char-btn">Characters</button>
                        </div>
                        )
                    } else {
                        return (
                        <div className="episode-card" key={ singleEpisodeData.id } style={ {backgroundColor: setBackgroundColor(singleEpisodeData.episode) }}>
                            <p className="episode-id">{ singleEpisodeData.id }</p>
                            <h2 className="episode-name">{ singleEpisodeData.name }</h2>
                            <p className="episode-number">Season: { singleEpisodeData.episode.slice(1, 3) } | Episode: { singleEpisodeData.episode.slice(4) }</p>
                            <p className="episode-date">{ singleEpisodeData.air_date }</p>
                            <button className="episode-char-btn">Characters</button>
                        </div>
                        )
                    }
                })}
            </div>
            { loading && hasMore && <MainLoading/>}
        </section>
    );
}
 
export default Episodes;