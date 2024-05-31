import { Carousel } from "react-bootstrap";
import imgHero1 from "../assets/images/img-hero1.jpg";
import imgHero2 from "../assets/images/img-hero2.jpg";
import imgHero3 from "../assets/images/img-hero3.jpg";
import "../styles/hero.css";

export default function AppHero() {
  var heroData = [
    {
      id: 1,
      image: imgHero1,
      title: "The perfect design for your website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
      link: "https://www.google.com",
    },
    {
      id: 2,
      image: imgHero2,
      title: "Start Your Future Financial Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      image: imgHero3,
      title: "Enjoy the Difference",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
      link: "https://www.twitter.com",
    },
  ];

  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={"slide " + item.id}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="btn btn-primary" href={item.link}>
                  Learn More
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
