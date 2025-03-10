import { Container } from "react-bootstrap";
import "./StartPage.scss";
import { Link } from "react-router-dom";
import img4 from "../../../../assets/images/9E0A8485.jpg";
import img9 from "../../../../assets/images/9E0A0051.jpg";
import img15 from "../../../../assets/images/_ATP8950.jpg";
import insta from "../../../../assets/images/instagram.png";
import img16 from "../../../../assets/images/DSC02046.jpg";
import img17 from "../../../../assets/images/DSC09927.jpg";
import img18 from "../../../../assets/images/DSC09571.jpg";
import img20 from "../../../../assets/images/DSC09795.jpg";

const StartPage = () => {
  const images = [
    // img1,
    // img2,
    img18,
    img4,
    // img5,
    img17,
    // img8,
    img9,
    // img19,
    // img3,
    // img10,
    // // img12,
    // img13,
    // img6,
    // img14,
    img15,
    img20,
    img16,
  ];

  return (
    <>
      <section className="start py-60">
        <Container>
          <div className="start_con">
            <h3>Let’s Work Together</h3>
            <p>Love what you see? Need more details?</p>
            <button>Contact Us</button>
          </div>
        </Container>
      </section>
      <section className="follow py-60">
        <>
          <h4>
            <Link to="https://www.instagram.com/ved.diaries/" target="_blank">
              FOLLOW US ON INSTAGRAM
            </Link>
          </h4>
          <div className="insta_con">
            <div className="instagram_flex">
              <Link to="https://www.instagram.com/ved.diaries/" target="_blank">
                <div className="instagram_scroll">
                  {images.map((src, index) => (
                    <img key={index} src={src} alt="" />
                  ))}
                </div>
              </Link>
            </div>
          </div>
          <div className="follow_insta text-center mt-5">
            <div className="cursor-pointer">
              <Link to="https://www.instagram.com/ved.diaries/" target="_blank">
                <img src={insta} alt="insta_img" width={35} />
                <p className="text-dark pt-5">@ ved.diaries</p>
              </Link>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default StartPage;
