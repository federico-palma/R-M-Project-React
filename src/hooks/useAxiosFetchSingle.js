import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosFetchSingle(endpoint) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      baseURL: "https://rickandmortyapi.com/api/",
      url: endpoint,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setError(true);
        if (axios.isCancel(e)) return;
      });

    return () => cancel;
  }, [endpoint]);

  return { data, loading, error };
}

export default useAxiosFetchSingle;
