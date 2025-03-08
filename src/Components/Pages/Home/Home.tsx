import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import BannerSection from "./BannerSection/BannerSection";
import Categories from "./Categories/Categories";
import StartPage from "./StartPage/StartPage";

const Home = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <Categories />
      <StartPage />
      <Footer />
    </>
  );
};

export default Home;
