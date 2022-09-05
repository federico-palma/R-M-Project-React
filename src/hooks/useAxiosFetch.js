import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosFetch(endpoint, pageNumber, query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      baseURL: "https://rickandmortyapi.com/api/",
      url: endpoint,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setData(prevData => {
          if (prevData) {
            return [...prevData, ...res.data.results];
          } else {
            return [...res.data.results];
          }
        });
        setLoading(false);
        setHasMore(res.data.info.next !== null);
      })
      .catch(e => {
        setLoading(false)
        setError(true);
        if (axios.isCancel(e)) return;
      });

    return () => cancel;
  }, [query, pageNumber, endpoint]);

  return { data, loading, error, hasMore };
}

export default useAxiosFetch;
