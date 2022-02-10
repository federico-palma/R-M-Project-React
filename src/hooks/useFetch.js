import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const abortCtr = new AbortController();

            fetch(url, { signal: abortCtr.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error('Resource could not be fetched');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch has been aborted')
                } else {
                    setError(err.message);
                    setIsPending(null);
                }
            });

        return () => abortCtr.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;

