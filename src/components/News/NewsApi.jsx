import { useEffect, useState } from "react";
import NewsApiDataCard from "./NewsApiDataCard";
import {data} from '../../assets/Data'

const NewsApi = () => {
const [count,setCount] = useState(0)
 

  // useEffect(() => {
  //   const fetchDataFromApi = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=86bc2d8b350e4181954fd9714769a355"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Error here");
  //       }
  //       const responseData = await response.json();
  //       setData(responseData.articles);
  //     } catch (error) {
  //       console.log(error);
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchDataFromApi();
  // }, []);

  // if (loading) {
  //   return <h1>Loading here</h1>
  // }
  // if (error) {
  //   return <h1>Error here</h1>;
  // }
  useEffect(()=>{
     let interval = setInterval(()=>{
       setCount(count+1)
     },1000)
     return ()=>{
       clearInterval(interval)
     }
   
  },[count])
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {data.map((dataItem, index) => (
        <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg p-4 w-full md:w-1/4 ">
          <NewsApiDataCard
            author={dataItem.author}
            title={dataItem.title}
            content={dataItem.content}
            description={dataItem.description}
            publishedAt={dataItem.publishedAt}
            source={dataItem.source}
            url={dataItem.url}
            urlToImage={dataItem.urlToImage}
          />
        </div>
      ))}
     <h1>{count}</h1>
    </div>

  );
};

export default NewsApi;
