import { useState, useEffect } from 'react'

function useApiData(url) {

  const [apiData, setApiData] = useState({})

  useEffect(() => {    
    fetch(url)
        .then((response) => {return response.json()})
        .then(json => setApiData(json._embedded))
    }, [])

  return apiData
}

export default useApiData