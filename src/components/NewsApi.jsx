import React, { useEffect, useState } from 'react'

const NewsApi = () => {
const [data,setData] = useState([])
    useEffect(()=>{
       const fetchDataFromApi = async ()=>{
           const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=86bc2d8b350e4181954fd9714769a355")
           const responseData = await response.json()
           setData(responseData)
            console.log(responseData);
       }
       fetchDataFromApi()
    },[])
  return (
    <div>
      <h1>Helo data</h1>
    </div>
  )
}


export default NewsApi
