import { Container } from "react-bootstrap";
import "./LetsWork.scss";
import {  useNavigate } from "react-router-dom";
const LetsWork = () => {
  const navigate = useNavigate();

  return (
    <section className="start py-60">
      <Container>
        <div className="start_con">
          <h3>Let’s Work Together</h3>
          <p>Love what you see? Need more details?</p>
          <button onClick={() => navigate("/contact-us")}>Contact Us</button>
        </div>
      </Container>
    </section>
  );
};

export default LetsWork;
