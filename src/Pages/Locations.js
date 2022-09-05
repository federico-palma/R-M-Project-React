import { useState, useRef, useCallback, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch.js";
import MainLoading from "../components/MainLoading";
import { Link } from "react-router-dom";

const Locations = () => {
  useEffect(() => {
    document.title = "Rick & Morty App | Locations";
  }, []);

  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, hasMore } = useAxiosFetch("location/", pageNumber);

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

  return (
    <section id="locations">
      <div id="location-cards">
        {data &&
          data.map((singleLocationData, index) => {
            return (
              <div
                className="location-card"
                key={singleLocationData.id}
                ref={data.length === index + 1 ? lastCharCard : null}>
                <p className="location-id">{singleLocationData.id}</p>
                <h2 className="location-name">{singleLocationData.name}</h2>
                <div>
                  <p className="location-type">Type: {singleLocationData.type}</p>
                  <p className="location-dimension">Dimension: {singleLocationData.dimension}</p>
                </div>
                <Link to={`/locations/${singleLocationData.id}`} className="residents-btn">
                  Residents
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

export default Locations;
