import { useParams } from "react-router-dom";
import useAxiosFetchSingle from "../hooks/useAxiosFetchSingle.js";
import MainLoading from "../components/MainLoading.js";

const LocationDetails = () => {
  const { id } = useParams();
  const { data: singleItemData, loading, error } = useAxiosFetchSingle("location/" + id);
  
  return (
    <section id="location-details">
      <div id="location-details-container" v-if="locationData">
        <h1 id="location-name">{singleItemData.name}</h1>
        <h2>Type: {singleItemData.type}</h2>
        <h2 v-if="residentsPool.length > 0">Residents</h2>
        <h2 v-else>No residents in this location</h2>
        <ul id="residents-list" v-if="residentsPool">
          {/* <router-link tag="li" class="resident-item" v-for="resident in residentsPool" :key="resident.id" :to="{ name: 'character-details', params: {id: resident.id} }"> 
            <img :src="resident.image" alt="">
            <p>{{ resident.name }} </p>
        </router-link> */}
        </ul>
      </div>
      {loading && <MainLoading />}
      {error && <p className="error-message">There has been an error</p>}
    </section>
  );
};

export default LocationDetails;
