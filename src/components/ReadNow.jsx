import ReadNowCard from "./ReadNowCard";
const ReadNow = () => {
  const cardData = [
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2018/05/13/14/52/boys-3396713_1280.jpg",
      title: "Read Children Now",
      description:
        "Immerse your children in the magical world of books. Foster their imagination, boost their knowledge, and nurture their love for reading with our specially curated collection.",
      buttonText: "Read Now",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2019/06/29/01/24/kids-4305233_1280.jpg",
      title: "Explore New Techonology",
      description:
        "Discover new adventures and tales that captivate young minds. Our collection is designed to inspire and engage children of all ages.",
      buttonText: "Explore Now",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/11/14/03/06/kids-1822685_1280.jpg",
      title: "Learning Through Fun",
      description:
        "Combine learning with fun through our interactive and educational books. Perfect for making reading an enjoyable experience for kids.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="" id="ReadNow">
      <div className="carousel carousel-end rounded-box">
        {cardData.map((cardItem, cardIndex) => {
          return (
            <ReadNowCard
              key={cardIndex}
              img={cardItem.imgSrc}
              title={cardItem.title}
              description={cardItem.description}
              buttonText={cardItem.buttonText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReadNow;
