import React, { useEffect, useState } from 'react';

const Card = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
   // const DATA = '';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();

      const filteredData = jsonData.map(({ userId, id, ...rest }) => rest);
      setData(filteredData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: An error occurred while fetching data.</p>;

  return (
    <div className='card_main'>
      <h1>Fetching Data</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Card;
