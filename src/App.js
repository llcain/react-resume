
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/Skills/skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
