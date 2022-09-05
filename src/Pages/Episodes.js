import { useState, useRef, useCallback } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch.js";
import MainLoading from "../components/MainLoading";
import { Link } from "react-router-dom";

const Episodes = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, loading, error, hasMore } = useAxiosFetch("episode/", pageNumber);

  const observer = useRef();
  const lastCharCard = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function setBackgroundColor(season) {
    switch (season.slice(0, 3)) {
      case "S01":
        return "#7a78dd";
      case "S02":
        return "#d35868";
      case "S03":
        return "#e98c46";
      case "S04":
        return "#85c870";
      case "S05":
        return "#eb63df";
      case "S06":
        return "#eeec7f";
      case "S07":
        return "#82e4cf";
      default:
        return "";
    }
  }

  return (
    <section id="episodes">
      <div id="episode-cards">
        {data &&
          data.map((singleEpisodeData, index) => {
            return (
              <div
                className="episode-card"
                key={singleEpisodeData.id}
                style={{ backgroundColor: setBackgroundColor(singleEpisodeData.episode) }}
                ref={data.length === index + 1 ? lastCharCard : null}>
                <p className="episode-id">{singleEpisodeData.id}</p>
                <h2 className="episode-name">{singleEpisodeData.name}</h2>
                <p className="episode-number">
                  Season: {singleEpisodeData.episode.slice(1, 3)} | Episode:{" "}
                  {singleEpisodeData.episode.slice(4)}
                </p>
                <p className="episode-date">{singleEpisodeData.air_date}</p>
                <Link to={`/episodes/${singleEpisodeData.id}`} className="episode-char-btn">
                  Characters
                </Link>
              </div>
            );
          })}
      </div>
      {loading && hasMore && <MainLoading />}
      {error && <p className="error-message">There has been an error</p>}
    </section>
  );
};

export default Episodes;
