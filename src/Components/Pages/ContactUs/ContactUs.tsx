import { Container, Form } from "react-bootstrap";
import "./ContactUs.scss";
import CustomInput from "../../Common/CustomInput/CustomInput";

const ContactUs = () => {
  return (
    <section className="contact">
      <Container>
        <h2>Contact Us</h2>
        <div className="contact_con">
          <h3>Let’s Create Magic Together!</h3>
          <p>
            Your journey to capturing unforgettable moments starts here. Whether
            you're looking to book a session or just want to explore ideas, I’d
            love to connect! Share your vision, ask any questions, or check
            availability—every story is special, and I can't wait to be a part
            of yours. Send me a message below, and let’s turn your moments into
            lasting memori
          </p>
          <div className="contact_us_form">
            <Form>
              <CustomInput type="text" label="Name" name="name" id="name" sub />
              <CustomInput
                type="email"
                label="Email Address"
                name="email"
                id="name"
                sub
              />
              <CustomInput
                type="date"
                label="Event Date"
                name="Event Date"
                id="name"
                sub
              />
              <CustomInput
                type="text"
                label="Message"
                name="message"
                id="name"
                sub
              />
              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
