import Head from './components/head/Head';
import Navbar from './components/navbar/Navbar';
import Volunteer from './container/experience/Volunteer';
import Company from './container/experience/Company';
import Projects from './container/projects/Projects';
import Footer from './components/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
    <Navbar />
    <div className='App__container'>
    <Head />
    <div className='App__experience'>
    <Projects />
    <Company />
    <Volunteer />
    </div>
    <Footer />
    </div>
    </div>
  );
}

export default App;
