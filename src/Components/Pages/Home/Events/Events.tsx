import { Col, Container, Row } from "react-bootstrap";
import "../../Wedding/Wedding.scss";
import { motion } from "framer-motion";
import img6 from "../../../../assets/images/DSC02046.jpg";
import img7 from "../../../../assets/images/DSC02042.jpg";
import img10 from "../../../../assets/images/9E0A8569.jpg";
import img1 from "../../../../assets/images/9E0A8498.jpg";
import img2 from "../../../../assets/images/9E0A8485.jpg";
import img3 from "../../../../assets/images/1J2A0503.jpg";
import img4 from "../../../../assets/images/1J2A0505.jpg";
import img8 from "../../../../assets/images/1J2A9887.jpg";
import img9 from "../../../../assets/images/1J2A9816.jpg";
import img11 from "../../../../assets/images/1J2A0505.jpg";
const Events = () => {
  const images = [img7, img3, img6, img2,img8, img9,img11, img10, img1, img4];

  return (
    <section className="wedding">
      <Container>
        <h2 className="text-center mb-5 pb-lg-5 pb-4">Make Memories Last</h2>
        <Row className="p-0 m-0">
          {images.map((image, index) => (
            <Col lg={3} md={4} sm={6} key={index}>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="wedding_img mb-5"
              >
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={image}
                  alt={`Image ${index}`}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Events;
