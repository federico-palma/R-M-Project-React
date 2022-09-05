import { useParams } from "react-router-dom";
import useAxiosFetchSingle from "../hooks/useAxiosFetchSingle.js";
import MainLoading from "../components/MainLoading.js";

const CharacterDetails = () => {
  const { id } = useParams();
  const { data: singleItemData, loading, error } = useAxiosFetchSingle("character/" + id);

  return (
    <section id="character-details">
      {singleItemData && (
        <div id="character-details-container">
          <h1 id="character-name">{singleItemData.name}</h1>
          <img src={singleItemData.image} alt=""></img>
          <ul id="character-details-list">
            <li className="character-details-item">Status: {singleItemData.status}</li>
            <li className="character-details-item">Gender: {singleItemData.gender}</li>
            <li className="character-details-item">Species: {singleItemData.species}</li>
            <li className="character-details-item">Origin: {singleItemData.origin.name}</li>
          </ul>
        </div>
      )}
      {loading && <MainLoading />}
      {error && <p className="error-message">There has been an error</p>}
    </section>
  );
};

export default CharacterDetails;
