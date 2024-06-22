import React, { useCallback, useState } from "react";
import ListFavourite from "./ListFavourite";
ListFavourite;
const ListCard = ({ data }) => {
  const [favourite, setFavourite] = useState(false);
  const [likeFavourite, setLikedFavourite] = useState([]);

  function handleFavourite(index) {
    const existed = likeFavourite.filter((item)=>{
        if(item.idCategory === index){
                return item
        }
    })
    if(existed.length == 0){
        let newfilterdArray = data.filter((item, i) => {
            if (index == item.idCategory) {
              return item;
            }
          });
          console.log(newfilterdArray);
      
          setLikedFavourite([...newfilterdArray,...likeFavourite]);
    }else{
        alert("already favourited")
    }
    console.log(index);
   
    
  
  }
  return (
    <div className=" ">
      <div className="flex flex-wrap w-screen justify-center">
        {data.map((category, index) => {
          return (
            <div
              key={category.idCategory}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <img
                className="w-full"
                src={category.strCategoryThumb}
                alt={category.strCategory}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <div className="flex justify-between">
                    {category.strCategory}
                    <a
                      onClick={() => {
                        handleFavourite(category.idCategory);
                      }}
                    >
                      {/* <i className="ri-heart-line text-[#E31B23]"></i> */}
                      <i
                        className={` ${
                          favourite
                            ? " text-red-500 ri-heart-fill transition-all"
                            : " text-red-500 ri-heart-line"
                        }`}
                      ></i>
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 text-base h-52 overflow-scroll">
                  {category.strCategoryDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col  py-20 bg-slate-400 ">
        <h1 className="text-3xl text-black text-center mb-20">My Favourites</h1>
        <div className="flex flex-row justify-center gap-5 flex-wrap mx-10">
        <ListFavourite liked={likeFavourite} />
        </div>
       
      </div>
    </div>
  );
};

export default ListCard;
