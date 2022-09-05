import { Link, useParams } from "react-router-dom";
import useAxiosFetchSingle from "../hooks/useAxiosFetchSingle.js";
import MainLoading from "../components/MainLoading.js";
import { useEffect, useState } from "react";

const LocationDetails = () => {
  const { id } = useParams();
  const { data: singleItemData, loading, error } = useAxiosFetchSingle("location/" + id);
  const [residentsInfo, setResidentsInfo] = useState();

  useEffect(() => {
    let residentsIDs;
    if (singleItemData) {
      residentsIDs = singleItemData.residents.map(residentUrl => {
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
    <section id="location-details">
      {singleItemData && (
        <div id="location-details-container">
          <h1 id="location-name">{singleItemData.name}</h1>
          <h2>Type: {singleItemData.type}</h2>
          {singleItemData.residents && <h2>Residents:</h2>}
          {!singleItemData.residents && <h2>No residents in this location</h2>}
          {singleItemData.residents && residentsInfo && (
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

export default LocationDetails;
