import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchSingle(endpoint, id, pageNumber) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore ] = useState(true);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;

        // setTimeout(() => {
            
        axios({
            method: 'GET',
            baseURL:'https://rickandmortyapi.com/api/',
            url: endpoint + id,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res.data)
            setLoading(false)
            setHasMore(res.data.info.next !== null)
            setData(res.data)
        }).catch(e => {
            setError(true)
            if (axios.isCancel(e)) return
        })

        return  () => cancel;
        // }, 2000);
    }, [endpoint, id])
    console.log(data)
    return { data, loading, error, hasMore }
}

export default useFetchSingle;
