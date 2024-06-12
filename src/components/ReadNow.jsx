import ReadNowCard from "./ReadNowCard";
import ReadNowFilterTool from "./ReadNowFilterTool";
const ReadNow = () => {
  const cardData = [
    {
      imgSrc: "https://picsum.photos/400/300?random=1",
      title: "Art and Design",
      description:
        "Discover the world of art and design with our collection of books.",
      buttonUrl: "https://en.wikipedia.org/wiki/Art",
      isRead: true,
    },
    {
      imgSrc: "https://picsum.photos/400/300?random=2",
      title: "Science and Technology",
      description:
        "Explore the latest advancements in science and technology with our collection of books.",
      buttonUrl: "https://en.wikipedia.org/wiki/Science",
      isRead: false,
    },
    {
      imgSrc: "https://picsum.photos/400/300?random=3",
      title: "History and Culture",
      description:
        "Learn about the rich history and culture of the world with our collection of books.",
      buttonUrl: "https://en.wikipedia.org/wiki/History",
      isRead: false,
    },
    {
      imgSrc: "https://picsum.photos/400/300?random=4",
      title: "Fiction and Fantasy",
      description:
        "Escape into the world of fiction and fantasy with our collection of books.",
      buttonUrl: "https://en.wikipedia.org/wiki/Fiction",
      isRead: true,
    },
    {
      imgSrc: "https://picsum.photos/400/300?random=5",
      title: "Self-Improvement and Personal Development",
      description:
        "Discover the secrets to success and personal growth with our collection of books.",
      buttonUrl: "https://en.wikipedia.org/wiki/Self-improvement",
      isRead: true,
    },
    {
      imgSrc: "https://picsum.photos/400/300?random=6",
      title: "Travel and Adventure",
      description:
        "Explore the world and discover new adventures with our collection of books.",
      buttonUrl: "https://en.wikipedia.org/wiki/Travel",
      isRead: false,
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col justify-center align-middle mt-10"
      id="ReadNow"
    >
      <ReadNowFilterTool>
      <div className="readnow_content">
        <h1 className="read-heading text-center w-full text-black text-4xl  text-blue-500 hover:text-red-500 font-bold">
          Read Now
        </h1>
        <p className="m-auto max-w-[900px] mt-5 text-center text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          possimus eos magni repudiandae eligendi assumenda, in architecto at
          beatae molestias aut dolor, nesciunt nostrum facilis temporibus
          placeat error autem est aperiam. Odio nesciunt maxime enim facilis.
          Voluptatibus, alias quia, fuga aperiam quasi quibusdam natus
        </p>
      </div>
      </ReadNowFilterTool>
      <div className="carousel carousel-end rounded-box gap-6 m-20">
        {cardData.map((cardItem, cardIndex) => {
          return (
            <ReadNowCard
              key={cardIndex}
              img={cardItem.imgSrc}
              title={cardItem.title}
              description={cardItem.description}
              buttonUrl={cardItem.buttonUrl}
              isRead={cardItem.isRead}
              onAction={() => {
                alert("You have clicked article card");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReadNow;
