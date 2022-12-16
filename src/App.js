import './App.css';
import './scss/reset.scss';
import './scss/all.scss';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
