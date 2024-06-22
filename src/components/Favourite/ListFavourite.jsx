import React from 'react'

const ListFavourite = ({liked}) => {
  const flatedLiked = liked.flat(Infinity)

  return (
   <>
    {flatedLiked.map((item)=>{
       return(
        <div  key={item.idCategory}className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <img className="w-full" src={item.strCategoryThumb} alt={item.strCategory} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.strCategory}</div>
          <p className="text-gray-700 text-base h-52 overflow-scroll">
            {item.strCategoryDescription}
          </p>
        </div>
      </div>
       )
    })}
   </>
  )
}

export default ListFavourite
