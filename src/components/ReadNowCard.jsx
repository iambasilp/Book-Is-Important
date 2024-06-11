const ReadNowCard = ({ img, title, description }) => {
  return (
    <div className="carousel-item ">
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
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadNowCard;
