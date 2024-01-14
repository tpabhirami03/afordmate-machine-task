import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg from "../assets/CarouselImg.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import FeatureItem from "./FeatureItem";
import game from "../assets/game.svg";
import tik from "../assets/tik.svg";
import xbox from "../assets/xbox.svg";
import { Button } from "react-bootstrap";

const fetaures = [
  {
    id: 0,
    text: "5000+ video games available",
    imgUrl: game,
  },
  {
    id: 1,
    text: "Trusted by 100.000+ customers",
    imgUrl: tik,
  },
  {
    id: 2,
    text: "Available for all Xbox consoles",
    imgUrl: xbox,
  },
];

function Home() {
  return (
    <>
      <div>
        <Carousel interval={null} className="carosal-custom">
          <Carousel.Item>
            <img
              className="background-img"
              src={CarouselImg}
              alt="Carousel Image"
            />
            <Carousel.Caption className="first-slide">
              <h1 className="multi-text">MultiVersus</h1>
              <p id="p">
                Now officially free to play for all <br /> Xbox users{" "}
              </p>

              <Button className="get-it-now" variant="primary">
                Get in now!
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="background-img" src={img2} alt="Carousel Image" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="background-img" src={img3} alt="Carousel Image" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* why eXStore */}
      <div className="features-container">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-3 xbox-text">
          <h1>Why eXStore?</h1>
          <p>
            We are the official Xbox partner in indinasia that <br />
            provides official video games.{" "}
          </p>
        </div>
        <div className="feature-items">
          {fetaures.map((item) => (
            <FeatureItem key={item.id} img={item.imgUrl} text={item.text} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
