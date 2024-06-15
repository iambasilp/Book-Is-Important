import React from "react";

const NewsApiDataCard = ({
  author,
  title,
  content,
  description,
  publishedAt,
  source,
  url,
  urlToImage,
}) => {
  return (
    <div className="max-w-lg mx-auto my-4 p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row">
      {urlToImage ? (
        <img
          className="w-full md:w-1/3 rounded-md object-cover"
          src={urlToImage}
          alt={title}
        />
      ) : (
        <img
          className="w-full md:w-1/3 rounded-md object-cover"
          src={
            "https://i.seadn.io/gae/OGpebYaykwlc8Tbk-oGxtxuv8HysLYKqw-FurtYql2UBd_q_-ENAwDY82PkbNB68aTkCINn6tOhpA8pF5SAewC2auZ_44Q77PcOo870?auto=format&dpr=1&w=1000"
          }
        />
      )}

      <div className="flex flex-col justify-between p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 text-sm mb-4">
          By {author || "Unknown"} on{" "}
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        <a href={url} className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsApiDataCard;
