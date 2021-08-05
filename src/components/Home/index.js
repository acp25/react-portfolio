import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../../assets/images/profile_pic.PNG";
// import background from "./assets/images/combgpic.jpg";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hello</h2>
        <p>Welcome to my Portfolio!</p>
        <Link to="portfolio">
          <button> Projects </button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
      {/* <div className="background">
        <img
          src={background}
          alt="computer pic"
        />
      </div> */}
      
    </section>
  );
}

export default Home;
