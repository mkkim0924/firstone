import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/PopularProjects/Projects';
import Values from './components/ValueSections';
import Values2 from './components/ValueSections2';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Values />
      <Values2 />
      <Footer />
    </div>
  );
}

export default App;
