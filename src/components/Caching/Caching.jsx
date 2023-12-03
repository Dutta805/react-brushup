//one way to achieve react caching is by using the hook useMemo
//useMemo can memoize the results of expensive computations or data fatching operations


import React, { useEffect, useMemo, useState } from 'react';

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}


export default function Caching() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData().then((result) => setData(result));
    },[])
    const cachedData = useMemo(() => data, [data])
    
  return (
    <div>
        <h1>Caching</h1>
        {
            cachedData ? (
                <div>
                    <p>API data:</p>
                    <pre>{JSON.stringify(cachedData)}</pre>
                </div>
            ) : (<div>Loading.......</div>)
        }
    </div>
  )
}
