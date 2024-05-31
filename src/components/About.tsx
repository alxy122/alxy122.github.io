import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/img1.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../styles/about.css";

export default function AppAbout() {
  const value1 = 80;
  const value2 = 60;
  const value3 = 10;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Subtitle</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              repellat quae impedit, hic vero dolorum omnis adipisci! Odit quis
              neque est hic, repellat non, nostrum explicabo sint voluptatibus
              voluptas minus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              obcaecati, vero quae dicta asperiores optio sapiente ducimus.
              Velit, vero necessitatibus! Reiciendis sint doloremque fugiat
              itaque animi perferendis expedita obcaecati quia.
            </p>
            <div className="progress-block">
              <h4>Header 1</h4>
              <ProgressBar now={value1} label={`${value1}%`} />
            </div>
            <div className="progress-block">
              <h4>Header 2</h4>
              <ProgressBar now={value2} label={`${value2}%`} />
            </div>
            <div className="progress-block">
              <h4>Header 3</h4>
              <ProgressBar now={value3} label={`${value3}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
