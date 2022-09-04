import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosFetchSingle(endpoint) {
    const [singleItemData, setSingleItemData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    setLoading(true);
    setError(false);
        
    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setSingleItemData(data)
            })
            .catch(err => console.log(err.message)) 

        return { singleItemData, loading, error }
    }, [endpoint])
}

export default useAxiosFetchSingle;