import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import "../styles/works.css";

export default function AppWorks() {
  const [currentPage, setCurrentPage] = useState(1);

  const worksData = [
    {
      id: 1,
      link: "https://www.google.com",
      image: img1,
      title: "Lonely Path",
      subtitle: "Web Design",
    },
    {
      id: 2,
      link: "https://www.google.com",
      image: img2,
      title: "Photographer Girl",
      subtitle: "Branding",
    },
    {
      id: 3,
      link: "https://www.google.com",
      image: img3,
      title: "The Difference",
      subtitle: "Web Design",
    },
    {
      id: 4,
      link: "https://www.google.com",
      image: img4,
      title: "Nature Patterns",
      subtitle: "Branding",
    },
    {
      id: 5,
      link: "https://www.google.com",
      image: img5,
      title: "The Difference",
      subtitle: "Photography",
    },
    {
      id: 6,
      link: "https://www.google.com",
      image: img6,
      title: "Winter Sonata",
      subtitle: "Web Design",
    },
    {
      id: 7,
      link: "https://www.google.com",
      image: img7,
      title: "Lonely Path",
      subtitle: "Branding",
    },
    {
      id: 8,
      link: "https://www.google.com",
      image: img8,
      title: "Appreciation",
      subtitle: "Photography",
    },
    {
      id: 9,
      link: "https://www.google.com",
      image: img9,
      title: "Happy Days",
      subtitle: "Web Design",
    },
  ];

  const itemsPerPage = 6;
  const numPages = Math.ceil(worksData.length / itemsPerPage);
  const pageNumbers = Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Or Works</h2>
          <div className="subtitle">Subtitle</div>
        </div>
        <Row className="portfoliolist">
          {worksData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((work) => {
              return (
                <Col sm={4} key={work.id}>
                  <div className="portfolio-wrapper">
                    <a href={work.link}>
                      <Image src={work.image} />
                      <div className="label text-center">
                        <h3>{work.title}</h3>
                        <p>{work.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })}
        </Row>
        <Pagination>
          {pageNumbers.map((number) => (
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </section>
  );
}
