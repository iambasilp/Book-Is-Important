import React, { useEffect, useState } from "react";

const NewsApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoaing] = useState(true);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=86bc2d8b350e4181954fd9714769a355"
        );
        if (!response.ok) {
          throw new Error("network error");
        }
        const responseData = await response.json();
        setData(responseData.articles);
        console.log(responseData.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoaing(false);
      }
    };
    fetchDataFromApi();
  }, []);
  if (loading) {
    return <h1>Loading .....</h1>;
  }
  if (error) {
    return <h1 className="text-red">Error here</h1>;
  }
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis
        ad sequi tempora aliquid placeat architecto illo non molestiae
        consequatur, amet provident ea quos voluptatibus molestias aliquam,
        fugiat saepe ex?
      </p>
    </div>
  );
};

export default NewsApi;
