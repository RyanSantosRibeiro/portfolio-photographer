import './App.css';
import './scss/reset.scss';
import './scss/all.scss';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
    </div>
  );
}

export default App;
