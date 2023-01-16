import React from "react";
import {
  Announcement,
  Navbar,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from "../components";

function Home() {
  return (
    <div className="Home">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
