import { Link } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch.js";
import MainLoading from "../components/MainLoading";

const Characters = () => {
  useEffect(() => {
    document.title = "R&M React App | Characters";
  }, []);

  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, error, hasMore } = useAxiosFetch("character/", pageNumber);

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

  function setImgGenderColor(charGender) {
    switch (charGender) {
      case "Male":
        return "0px 0px 5px 3px #1512da";
      case "Female":
        return "0px 0px 5px 3px #da122d";
      case "Genderless":
        return "0px 0px 5px 3px #ee7b22";
      case "unknown":
        return "0px 0px 5px 3px #4ecf27";
      default:
        return "0px 0px 5px 3px #f60fe3";
    }
  }

  return (
    <section id="characters">
      <div id="character-cards">
        {data &&
          data.map((singleCharData, index) => {
            return (
              <Link
                to={`/characters/${singleCharData.id}`}
                className="char-card"
                key={singleCharData.id}
                ref={data.length === index + 1 ? lastCharCard : null}>
                <img
                  src={singleCharData.image}
                  alt=""
                  className="char-img"
                  style={{ boxShadow: setImgGenderColor(singleCharData.gender) }}
                />
                <h2 className="char-name">{singleCharData.name}</h2>
                <p className="char-id">{singleCharData.id}</p>
              </Link>
            );
          })}
        {loading && hasMore && <MainLoading />}
        {error && <p className="error-message">There has been an error</p>}
      </div>
    </section>
  );
};

export default Characters;
