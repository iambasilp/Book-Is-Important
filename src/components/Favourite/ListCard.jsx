import React from "react";

const ListCard = ({data}) => {
    console.log(data);
   
  return (
    <div>
        {data.map((item,index)=>{
            return <h1 key={index}>{item.strCategory}</h1>
        })}
    </div>
    
  );
};

export default ListCard;
