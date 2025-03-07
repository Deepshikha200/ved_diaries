import { Container } from "react-bootstrap";
import "./BannerSection.scss";
const BannerSection = () => {
  return (
    <section className="banner">
      <Container>
        <h1 className="banner__title">Moments in Motion, Stories in Frames</h1>
      </Container>
    </section>
  );
};

export default BannerSection;
