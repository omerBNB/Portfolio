import logo from './logo.svg';
import { Header } from './views/Header';
import { AboutPage } from './views/AboutPage';
import { ExperiencePage } from './cmps/ExperiencePage';
import { Footer } from './views/Footer';
import { Services } from './cmps/Services';
import { Portfolio } from './cmps/Portfolio';
import { ContactMe } from './views/ContactMe';
import { Nav } from './cmps/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
        <Nav/>
      <main>
        <AboutPage/>
        <ExperiencePage/>
        {/* <Services/> */}
        <Portfolio />
        <ContactMe />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
