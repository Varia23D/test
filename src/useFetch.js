import React from 'react'
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)    
  const [error, setError] = useState(null)

   //fetching data
   useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('couldnt fetch the data for that resource') //make an error message
        }
        return res.json();
      })
      .then((data) => {
        setData(data.data)
        setIsLoading(false); // dont show after data loaded
        setError(null)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err.message)
      })
  }, [url])

  return (
    {data, isLoading, error}
  )
}
