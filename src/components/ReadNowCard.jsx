const ReadNowCard = ({ img, title, description, buttonUrl, isRead }) => {
  return (
    <a href={buttonUrl} className="carousel-item ">
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-blue-600 hover:text-white transition-all">
        <div className="object-cover">
          <img src={img} alt="card image" className="w-full rounded-box" />
        </div>

        <div className="card-body ">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className={`badge badge-outline border border-none p-3 ${isRead ? "bg-green-700 text-white" : "bg-red-700 text-white"}`}>{isRead ? `Read` : "Unread"}</div>
            
          </div>
        </div>
      </div>
    </a>
  );
};

export default ReadNowCard;
