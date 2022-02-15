import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosFetch(endpoint, query, pageNumber) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore ] = useState(false);


    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel;
        axios({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/' + endpoint,
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data)
            setHasMore((res.data.info.next) ? true : false)
            setLoading(false)
            setData(res.data)
        }).catch(e => {
            setError(true)
            if (axios.isCancel(e)) return
        })

        return  () => cancel;
    }, [query, pageNumber])

    return { data, loading, error, hasMore }
}

export default useAxiosFetch;

