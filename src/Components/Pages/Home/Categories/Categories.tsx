import { Col, Container, Row } from "react-bootstrap";
import wedding_img from "../../../../assets/images/wedding.jpg";
import pre_wed from "../../../../assets/images/pre_wed.jpg";
import events from "../../../../assets/images/events.jpg";
import "./Categories.scss";

// Define TypeScript interface for category data
interface Category {
  id: number;
  name: string;
  image: string;
}

const categoriesData: Category[] = [
  { id: 1, name: "Wedding", image: wedding_img },
  { id: 2, name: "Pre Wedding", image: pre_wed },
  { id: 3, name: "Events", image: events },
];

const Categories: React.FC = () => {
  return (
    <section className="categories py-60">
      <Container>
        <Row>
          {categoriesData.map((category) => (
            <Col key={category.id} lg={4} md={6} sm={12}>
              <div className="categories_col mt-5 mt-md-0">
                <div className="img_con">
                  <img src={category.image} alt={category.name} />
                </div>
                <h4>{category.name}</h4>
                <p>Check More work</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
