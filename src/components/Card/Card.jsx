import React, {useEffect, useState} from 'react'
import './Card.module.css'
const DATA = 'https://jsonplaceholder.typicode.com/comments'

function Card() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(DATA);
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

    useEffect(() => {
      fetchData();
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>


  return (
    <div className='card_main'>
      <h1>
        fetching Data
      </h1>
      <p>
        {JSON.stringify(data, null, 2)}
      </p>
    </div>
  )
}

export default Card
