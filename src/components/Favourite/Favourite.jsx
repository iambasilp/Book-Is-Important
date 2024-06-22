import { useEffect, useState } from "react";
import ListCard from "./ListCard";
import ListFavourite from "./ListFavourite";
;

const Favourite = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();

        setData(data.categories);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDataFromApi();
  }, []);

  if (loading) {
    return <h1>Loading .....</h1>;
  }
  if (error) {
    return <h1>Error is happend</h1>;
  }
  console.log(data);
  return (
    <div className=" flex flex-col align-middle w-full my-20">
      <h1 className="text-3xl text-black text-center font-bold ">
        Add to Favourite Food{" "}
      </h1>
      <div className="container flex mt-15 my-20 ">
        <div className="list-card  ">
          <ListCard data={data} />
        </div>
       
      </div>
    </div>
  );
};

export default Favourite;


/// conten api

