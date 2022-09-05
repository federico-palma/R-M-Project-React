import { useParams } from "react-router-dom";
import useAxiosFetchSingle from "../hooks/useAxiosFetchSingle.js";
import MainLoading from "../components/MainLoading.js";

const CharacterDetails = () => {
  const { id } = useParams();
  const { singleItemData: characterData, loading, error } = useAxiosFetchSingle("character/" + id);

  return (
    <section id="character-details">
      {characterData && (
        <div id="character-details-container">
          <h1 id="character-name">{characterData.name}</h1>
          <img src={characterData.image} alt=""></img>
          <ul id="character-details-list">
            <li className="character-details-item">Status: {characterData.status}</li>
            <li className="character-details-item">Gender: {characterData.gender}</li>
            <li className="character-details-item">Species: {characterData.species}</li>
            <li className="character-details-item">Origin: {characterData.origin.name}</li>
          </ul>
        </div>
      )}
      { loading && <MainLoading/>}
    </section>
  );
};

export default CharacterDetails;
