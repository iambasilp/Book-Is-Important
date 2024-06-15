import { useEffect, useState } from "react";
import NewsApiDataCard from "./NewsApiDataCard";

const NewsApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86bc2d8b350e4181954fd9714769a355"
        );
        if (!response.ok) {
          throw new Error("Error here");
        }
        const responseData = await response.json();
        setData(responseData.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromApi();
  }, []);

  if (loading) {
    return <h1>Loding here ....</h1>
  }
  if (error) {
    return <h1>Error here</h1>;
  }
  return (
    <div>
      {data.map((dataItem, index) => (
        <NewsApiDataCard
          key={index}
          author={dataItem.author}
          title={dataItem.title}
          content={dataItem.content}
          description={dataItem.description}
          publishedAt={dataItem.publishedAt}
          source={dataItem.source}
          url={dataItem.url}
          urlToImage={dataItem.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsApi;
