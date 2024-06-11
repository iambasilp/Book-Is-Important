const About = () => {
    return (
      <div className="hero bg-base-200 min-h-screen" id="about">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2021/01/27/07/19/baby-5953965_1280.jpg"
              className="max-w-xl rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 py-12 alig">
            <h1 className="text-5xl font-bold">About Reading</h1>
            <p className="mt-6">
              Reading enriches our minds, expands our horizons, and fosters
              lifelong learning. It opens door to new worlds, cultivates empathy,
              and enhances critical thinking, making it an indispensable tool for
              personal and intellectual growth.
            </p>
            <a
              className="btn btn-primary mt-6"
              href="https://medium.com/@vherbst217/the-importance-of-reading-db3078a5680e#:~:text=People%20who%20regularly%20indulge%20in,t%20engage%20in%20such%20activities."
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;