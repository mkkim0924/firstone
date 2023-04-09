import GetStarted from '../../components/GetStarted/GetStarted';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/PopularProjects/Projects';
import Values from '../../components/ValueSections';
import Values2 from '../../components/ValueSections2';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import FeaturedTasker from '../../components/FeaturedTaksers/FeaturedTasker';

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Values />
      <FeaturedTasker />
      <Values2 />
      <GetStarted />
      <Footer />
    </>
  );
};

export default index;
