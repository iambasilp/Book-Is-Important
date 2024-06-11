import React from "react";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/11/29/12/51/man-1869624_1280.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Read Now</h1>
          <p className="mb-5 text-slate-100">
          Discover the joy of reading and unlock endless possibilities with Read Now. Dive into new worlds, expand your knowledge, and ignite your imagination.
          </p>
          <button className="btn btn-primary text-slate-200">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
