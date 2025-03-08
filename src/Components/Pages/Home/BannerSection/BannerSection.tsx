import { Col, Container, Row } from "react-bootstrap";
import "./BannerSection.scss";
const BannerSection = () => {
  return (
    <>
      <section className="banner">
        <Container>
          <h1 className="banner__title">Stories in Frames</h1>
          <h3>By Ved Diaries</h3>
        </Container>
      </section>
      <section className="about py-60">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about__heading">
                <h2>HI I AM LUCKY</h2>
                <h3>A WEDDING PHOTOGRAPHER</h3>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about__desc">
                <p>
                  A passionate Fine Art & Wedding Photographer.
                  <br />I don’t just capture moments—I tell love stories. Every
                  couple has a unique journey, and my goal is to preserve those
                  emotions, connections, and fleeting glances that make your
                  wedding day truly yours. From quiet, intimate moments to the
                  joyous celebrations, I create timeless images that reflect the
                  beauty and authenticity of your love.
                  <br />
                  <br /> With a blend of artistry and storytelling, I ensure
                  that every photograph becomes a cherished keepsake, bringing
                  your wedding day back to life every time you look at it. Let’s
                  create something unforgettable together!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BannerSection;
