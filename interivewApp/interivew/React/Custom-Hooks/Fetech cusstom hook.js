import {useState, useEffect} from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null); // For storing fetched data
  const [loading, setLoading] = useState(true); // For the loading state
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => { 
    fetchData();
  }, [url, options]); // Dependency array to trigger re-fetch when `url` or `options` change

  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error before making a new request
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result); // Set the data from API
    } catch (err) {
      setError(err.message); // Catch and set error
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  return {data, loading, error};
}

export default useFetch;
