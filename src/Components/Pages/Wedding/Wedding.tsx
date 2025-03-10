import { Col, Container, Row } from "react-bootstrap";
import "./Wedding.scss";
import img6 from "../../../assets/images/9E0A0220.jpg";
import img7 from "../../../assets/images/wedding.jpg";
import img8 from "../../../assets/images/9E0A0109.jpg";
import img10 from "../../../assets/images/9E0A0044.jpg";
import img1 from "../../../assets/images/9E0A5389.jpg";
import img2 from "../../../assets/images/_ATP8950.jpg";
import img3 from "../../../assets/images/9E0A5437.jpg";
import img4 from "../../../assets/images/9E0A5571.jpg";
import { motion } from "motion/react";

const Wedding = () => {
  const images = [img6, img7, img8, img2, img10, img3, img1, img4];

  return (
    <section className="wedding">
      <Container>
        <h2 className="text-center mb-5 pb-lg-5 pb-4">Make Memories Last</h2>
        <Row>
          {images.map((image, index) => (
            <Col lg={3} md={4} sm={6}>
              <motion.div
              initial={{ opacity: 0 , scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="wedding_img mb-5" key={index}>
                <img src={image} alt={`Image ${index}`} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Wedding;
