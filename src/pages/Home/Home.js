import React from "react";
import "../Home/Home.css";
import Devices from "../../components/Devices/Devices";
import Map from "../../components/Map/Map";
import Reach from "../../components/Reach/Reach";
import FloatingIcons from "../../components/FloatingIcons/FloatingIcons";
import Slider from "../../components/Slider/Slider";
import Gallery from "../../components/Gallery/Gallery";
import Testimonial from "../../components/Testimonial/Testimonial";
const Home = (props) => {
  return (
    <>
      <div className="landing-page">
        <div className="landing-circle-parent">
          <img
            className="landing-circle"
            src="https://ik.imagekit.io/mtmwll7w3/images/lander-circle-final.png?updatedAt=1698121418468"
            alt=""
          />
        </div>
        <div className="title-wrapper">
          <h1 className="title display-4">Gamer's Burnout</h1>
        </div>
        <div className="throne">
          <img
            className="throne-img"
            src="https://ik.imagekit.io/mtmwll7w3/images/throne-img.png?updatedAt=1698121418468"
            alt=""
          />
        </div>

        <section>
          <FloatingIcons />
        </section>
      </div>

      <section className="col">
        <div className="heading-wrapper">
          <h3>Games</h3>
        </div>
      </section>

      <section className="games">
        <Slider />
      </section>

      <section className="devices">
        <Devices />
      </section>

      <section>
        <div className="heading-wrapper">
          <h3>GALLERY</h3>
          <Gallery />
        </div>
      </section>

      <section className="col">
        <div className="heading-wrapper">
          <h3>REACH</h3>
        </div>
      </section>

      <section>
        <Reach />
      </section>

      <section className="col">
        <div className="heading-wrapper">
          <h3>TESTIMONIALS</h3>
        </div>
      </section>

      <section className="gb-testimonial">
        <Testimonial />
      </section>

      <section className="col">
        <div className="heading-wrapper">
          <h3>Locate Us</h3>
        </div>
      </section>

      <section className="navigationMap">
        <Map />
      </section>
    </>
  );
};

export default Home;
