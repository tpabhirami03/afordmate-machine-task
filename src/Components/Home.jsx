import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg from "../assets/CarouselImg.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import FeatureItem from "./FeatureItem";
import game from "../assets/game.svg";
import tik from "../assets/tik.svg";
import xbox from "../assets/xbox.svg";

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
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              src={CarouselImg}
              alt="Carousel Image"
              style={{
                width: "100vw",
                height: "100vh",
                backgroundSize: "no-repeat",
              }}
            />
            <Carousel.Caption className="first-slide">
              <h1 id="h1">MultiVersus</h1>
              <p id="p">
                Now officially free to play for all <br /> Xbox users{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              alt="Carousel Image"
              style={{
                width: "100vw",
                height: "100vh",
                backgroundSize: "no-repeat",
              }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img3}
              alt="Carousel Image"
              style={{
                width: "100vw",
                height: "100vh",
                backgroundSize: "no-repeat",
              }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* why eXStore */}
      <div className="features-container">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center xbox-text">
          <h1 style={{ fontWeight: "600", marginTop: "40px" }}>Why eXStore?</h1>
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
