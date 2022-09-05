import { Link, useParams } from "react-router-dom";
import useAxiosFetchSingle from "../hooks/useAxiosFetchSingle.js";
import MainLoading from "../components/MainLoading.js";
import { useEffect, useState } from "react";

const EpisodeDetails = () => {
  const { id } = useParams();
  const { data: singleItemData, loading, error } = useAxiosFetchSingle("episode/" + id);
  const [residentsInfo, setResidentsInfo] = useState();

  useEffect(() => {
    let residentsIDs;
    if (singleItemData) {
      residentsIDs = singleItemData.characters.map(residentUrl => {
        return residentUrl.replace(/\D/g, "");
      });
      fetch("https://rickandmortyapi.com/api/character/" + residentsIDs)
        .then(res => res.json())
        .then(data => {
          setResidentsInfo(Array.isArray(data) ? [...data] : [data]);
        });
    }
  }, [singleItemData]);

  return (
    <section id="episode-details">
      {singleItemData && (
        <div id="episode-details-container">
          <h1 id="episode-name">{singleItemData.name}</h1>
          <p className="episode-info">
            Season: {singleItemData.episode.slice(1, 3)} | Episode:{" "}
            {singleItemData.episode.slice(4)}
          </p>
          <p className="episode-info">Air date: {singleItemData.air_date}</p>
          {singleItemData.characters && <h2>Characters:</h2>}
          {!singleItemData.characters && <h2>No characters in this episode.</h2>}
          {singleItemData.characters && residentsInfo && (
            <ul id="residents-list">
              {residentsInfo.map((resident, index) => {
                return (
                  <Link to={`/characters/${resident.id}`} className="resident-item" key={index}>
                    <img src={resident.image} alt={`${resident.name}`}></img>
                    <p>{resident.name} </p>
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
      )}
      {loading && <MainLoading />}
      {error && <p className="error-message">There has been an error</p>}
    </section>
  );
};

export default EpisodeDetails;
