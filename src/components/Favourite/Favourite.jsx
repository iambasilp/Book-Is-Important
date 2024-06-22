import { useEffect, useState } from "react";
import ListCard from "./ListCard";
import ListFavourite from "./ListFavourite";

const Favourite = () => {
  const [data,setData] =  useState([])
  const [error,setError] = useState()
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();

        setData(data.categories)
      } catch (error) {

        setError(error)
      } finally{
        setLoading(false)
      }
    }
    fetchDataFromApi()
  },[]);

  if(loading){
    return <h1>Loading .....</h1>
  }
  if(error){
    return <h1>Error is happend</h1>
  }
  console.log(data);
  return (
    <div className=" flex flex-col align-middle w-full">
      <h1>Add to Favourite Food </h1>
      <div className="w-full container flex">
        <div className="list-card w-6/12 bg-red-600">
          <ListCard data={[...data]}/>
        </div>
        <div className="list--favourite w-6/12 bg-green-600 ">
         <ListFavourite />
        </div>
      </div>
    </div>
  );
};

export default Favourite;
